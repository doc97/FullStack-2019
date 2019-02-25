import { useState } from 'react'
import axios from 'axios'

export const useField = (name, type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => { setValue(event.target.value) }
  const reset = () => { setValue('') }

  return { type, value, name, onChange, reset }
}

export const useResource = (baseUrl) => {
  const [token, setToken] = useState(null)
  const [values, setValues] = useState([])

  const service = {
    setTokenHeader: (newToken) => {
      setToken(`Bearer ${newToken}`)
    },
    getConfig: () => {
      return {
        headers: { Authorization: token }
      }
    },
    getAll: () => {
      const request = axios.get(baseUrl)
      return request.then(response => {
        setValues(response.data)
        console.log(response.data)
        return response.data
      })
    },
    create: (newObject) => {
      const request = axios.post(baseUrl, newObject, this.getConfig())
      return request.then(response => {
        setValues(values.concat(response.data))
        return response.data
      })
    },
    update: (id, newObject) => {
      const request = axios.put(`${baseUrl}/${id}`, newObject, this.getConfig())
      return request.then(response => {
        setValues(values.map(v => v.id !== id ? v : response.data))
        return response.data
      })
    },
    remove: (id) => {
      const request = axios.delete(`${baseUrl}/${id}`, this.getConfig())
      return request.then(response => {
        setValues(values.slice().filter(v => v.id !== id))
        return response.data
      })
    }
  }

  return [
    values,
    service
  ]
}