import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city}) => {
  const [weather, setWeather] = useState(null)

  const cancelSource = axios.CancelToken.source()
  const baseWeatherUrl = 'https://api.apixu.com/v1/current.json'
  const weatherUrl = `${baseWeatherUrl}?key=${process.env.REACT_APP_APIXU_KEY}&q=${city}`
  useEffect(() => {
    axios
      .get(weatherUrl, { cancelToken: cancelSource.token })
      .then(response => {
        console.log(response.data.current)
        setWeather(response.data.current)
      })
      .catch(error => {})
    return () => cancelSource.cancel()
  }, [])

  const condition = () => (
    <>
    <p>{weather.condition.text}</p>
    <img alt='weather condition icon' src={`https:${weather.condition.icon}`} />
    </>
  )
  const temperature = () => (
    <>
    <strong>temperature: </strong>{weather.temp_c} Celsius
    </>
  )
  const wind = () => (
    <>
    <strong>wind: </strong>{weather.wind_kph} kph, direction: {weather.wind_dir}
    </>
  )

  const weatherData = () => {
    if (weather === null) {
      return null
    }

    return (
      <>
        <div>
          {condition()}
        </div>
        <div>
          {temperature()}
        </div>
        <div>
          {wind()}
        </div>
      </>
    )
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      {weatherData()}
    </div>
  )
}

export default Weather