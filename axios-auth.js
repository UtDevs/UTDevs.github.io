import axios from 'axios'

const instance = axios.create({
      //baseURL: 'http://ec2-3-133-102-228.us-east-2.compute.amazonaws.com:8090/communication/' // online
      baseURL: 'https://qcommunicator.herokuapp.com/' // online
      // baseURL: 'http://192.168.1.113:8080/' // testing
})
// const token = localStorage.getItem('token')
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
export default instance
