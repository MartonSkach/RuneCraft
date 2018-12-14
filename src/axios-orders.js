import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://runemock-10237.firebaseio.com/'
});

export default instance;