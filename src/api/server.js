import axios from 'axios'
import { SERVER_URL } from '../env'

const transformRequest = (data) => {
  const type = typeof data
  if (type === 'object') {
    let params
    if (data.File) {
      params = new FormData()
    } else {
      params = new URLSearchParams()
    }
    for (const key in data) {
      params.append(key, data[key])
    }
    return params
  }
  return data
}

const server = axios.create({
  baseURL: SERVER_URL,
  transformRequest
})

export default server
