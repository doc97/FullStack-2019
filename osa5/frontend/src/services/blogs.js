
import axios from 'axios'

const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => token = `Bearer ${newToken}`

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

export default { setToken, getAll, create }