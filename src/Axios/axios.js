import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@shop')
      return value;
  } catch(e) {
    console.log(e);
  }
}

const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'http://192.168.0.112:8080/',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async function (config) {
    let shop =  await getData();
    shop = JSON.parse(shop)
    if(shop.token){
      token = `Bearer ${shop.token}`;
    }
    config.headers.Authorization = token;
    return config;
  });

  return instance;
};

export default fetchClient();
