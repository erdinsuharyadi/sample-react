import axios from 'axios'

export const requestLogin = (body) => {
  return {
    type: 'USER_LOGIN',
    payload: axios.post('http://3.82.228.249:4000/auth/login/', body)
  }
}