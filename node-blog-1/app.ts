declare module 'http' {
    interface IncomingMessage {
        cookie: Record<string, string>;
        path: string;
        query: Record<string, string | string[]>;
    }
}

import { IncomingMessage, ServerResponse } from 'http';
import { stringify, parse } from 'querystring';


const handleBlogRouter = require('./src/router/blog.ts')
const handleUserRouter = require('./src/router/user.ts')

const getPostRequestData = (req: IncomingMessage, res?: ServerResponse) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }

        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        let postData = '';

        req.on('data', (chunk) => {
            postData += chunk.toString();
        });

        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        });
    })

    return promise
}


const serverHandle = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'application/json')

    const url = req.url;
    req.path = url.split('?')[0];

    // 解析 query
    req.query = parse(url.split('?')[1]);

    // 解析 cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ''
    cookieStr.split(':').forEach((item) => {
        if (!item) return
        const arr = item.split('=')
        const [key, value] = item.split('=');
        (req as any).cookie[key] = value
    })


    console.log('req.cookie', req.cookie);


    // 处理post data
    getPostRequestData(req).then(postData => {
        (req as any).body = postData

        console.log('处理post data', (req as any).body);

        // 处理 blog 路由
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(data => {
                if (data) {
                    console.log('blog', data);
                    res.end(JSON.stringify(data))
                    return
                }
            })
            return
        }

        //处理 user 路由
        const userResult = handleUserRouter(req, res)
        if (userResult) {
            userResult.then(data => {
                if (data) {
                    console.log('user', data);
                    res.end(JSON.stringify(data))
                }
            })
            return
        }

        // 未命中路由
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
        res.end()
    })

}

module.exports = serverHandle

