import axios from "axios";

// 封装一个网络请求函数
export function request(config){
  // 1、创建axios实例
  const instance = axios.create({
    
    // 这里之后要换成具体的服务器的地址
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 2、axios的拦截器：指当发送请求或者得到响应被then或catch处理之前对它们进行拦截，
  // 拦截后可对数据做一些处理，比如给请求数据添加头部信息，或对响应数据进行序列化，
  // 然后再传给浏览器，这些都可以在拦截器中进行
  
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3、发送真正的网络请求
  // 根据需求对获取的数据进行处理
  return instance(config)
}




