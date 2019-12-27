import axios from 'axios'

const instance = axios.create({
    //baseURL: '' // online
      baseURL: 'https://qcommunicator.herokuapp.com/' // testing
     //  baseURL: 'http://192.168.1.101:8080/' // testing
})
// const token = localStorage.getItem('token')
// instance.defaults.headers.common['Authorization'] = 'bearer ' + token
export default instance
