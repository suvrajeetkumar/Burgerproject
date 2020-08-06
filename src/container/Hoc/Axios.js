import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burgerapp-8bf5d.firebaseio.com/'
})

export default instance;