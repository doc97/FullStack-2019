import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdoteId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const object = { content, id: getAnecdoteId(), votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (patch, id) => {
  const response = await axios.patch(`${baseUrl}/${id}`, patch)
  return response.data
}

export default { getAll, create, update }