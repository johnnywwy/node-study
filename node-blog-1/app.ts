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
    (req as any).path = url.split('?')[0];

    // 解析 query
    (req as any).query = parse(url.split('?')[1])

    // 处理post data
    getPostRequestData(req).then(postData => {
        (req as any).body = postData

        console.log('req', (req as any).body);

        // 处理 blog 路由
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(data => {
                if (data) {
                    console.log(data);
                    res.end(JSON.stringify(data))
                    return
                }
            })
            return
        }

        // const blogData = handleBlogRouter(req, res)
        // if (blogData) {
        //     console.log(blogData);
        //     res.end(JSON.stringify(blogData))
        //     return
        // }

        //处理 user 路由
        const userData = handleUserRouter(req, res)
        if (userData) {
            console.log(userData);
            res.end(JSON.stringify(userData))
        }

        // 未命中路由
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
        res.end()
    })

}

module.exports = serverHandle

// process.env.NODE_ENV
