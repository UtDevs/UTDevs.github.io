import axios from 'axios'

const instance = axios.create({
      baseURL: 'https://qcommunicator.herokuapp.com/' // online
      // baseURL: 'http://192.168.1.113:8080/' // testing
})
// const token = localStorage.getItem('token')
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
export default instance
