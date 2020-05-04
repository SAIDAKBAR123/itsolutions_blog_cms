/* eslint-disable eqeqeq */
import axios from 'axios'
import router from '../router'
export function execute (promise) {
  return new Promise((resolve, reject) => {
    promise.then(res => resolve(res.data))
      .catch(err => {
        if (err) {
          if (err.response) {
            // eslint-disable-next-line eqeqeq
            if (err.response.status == 404) {
            }
            if (err.response.status == 401) {
              // store.commit('setTokenExpired', true)
              router.push('/pages/login')
            }
            reject(new Error(err.response))
          }
          reject(new Error(err))
        }
        reject(new Error('Check your request, and server'))
      })
  })
}

// const API = axios.create({
//   baseURL: process.env.VUE_APP_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('access_token')}`
//   }
// })

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('cmsAdmin')}`
    }
  })
}
