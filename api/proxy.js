Const {createProxyMiddleware}=需要("http-proxy-middleware");

模块。出口=(req,res)=>{
  让 目标="https://m.youtobe.com/";
  // 代理目标地址
  //这里使用后端主要用于区分Vercel serverless的api路径
  //如果(
  //req.url.startsWith("/api")||
  //req.url.startsWith("/auth")||
  //req.url.startsWith("/banner")||
  //req.url.startsWith("/CollegeTask")
  //   ) {
  //target="http://106.15.2.32:6969";
  //   }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    目标,
    changeOrigin:正确,
    pathRewrite:{
      //通过路径重写，去除请求路径中的‘/后端'
      //例如/后端/用户/登录将被转发到http://backend-api.com/user/login
      //"^/backend/"："/"，
    },
  })(req，res);
};
