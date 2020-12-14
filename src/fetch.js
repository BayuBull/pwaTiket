import axios from 'axios'

export default function fetch () {
  const token = localStorage.getItem('token')
  const options = {
    baseURL: process.env.VUE_APP_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return axios.create(options)
}
