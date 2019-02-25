import axios from 'axios'

/*
* OBSOLETE!
* has been replaced by a custom hook.
* To use said custom hook:
*
* import { useResource } from './hooks'
* ...
* const [blogs, blogService] = useResource('/api/blogs')
*/

const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => token = `Bearer ${newToken}`

const getConfig = () => {
  return {
    headers: { Authorization: token }
  }
}

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject, getConfig())
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject, getConfig())
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, getConfig())
  return request.then(response => response.data)
}

export default { setToken, getAll, create, update, remove }
