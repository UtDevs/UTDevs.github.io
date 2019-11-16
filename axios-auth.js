import axios from 'axios'

const instance = axios.create({
    //baseURL: '' // online
      baseURL: 'http://localhost:5000/' // testing
})
// const token = localStorage.getItem('token')
// instance.defaults.headers.common['Authorization'] = 'bearer ' + token
export default instance