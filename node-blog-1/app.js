
const handleBlogRouter = require('./src/router/blog.ts')
const handleUserRouter = require('./src/router/user.ts')

const serverHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        console.log(blogData);
        res.end(JSON.stringify(blogData))
        return
    }

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
}

module.exports = serverHandle

// process.env.NODE_ENV
