import axios from 'axios';

const instance = axios.create({
  baseURL : 'http://192.168.0.112:8080/'
});

// const fetchClient = () => {
//   const defaultOptions = {
//     baseURL: 'http://192.168.0.112:8080/',
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

  // Create instance
  // let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  //Intercepting the request to add the auth token 
//   instance.interceptors.request.use(function (config) {
//     let token = null
//     if(localStorage.getItem("userData")){
//       token = `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`;
//     }
//     config.headers.Authorization = token;
//     return config;
//   });

//   return instance;
// };

// export default fetchClient();
export default instance