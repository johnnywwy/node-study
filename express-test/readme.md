### 中间件

##### 中间价需要实现的几个api .listen .use .get .post

> app.use 用来注册中间件，先手机起来
> 遇到 http 请求，根据 path 和 method 判断触发哪些
>
> 实现 next 机制，即上一个通过 next 触发下一个
>
> 
