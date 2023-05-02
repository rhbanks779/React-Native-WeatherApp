import React, {useState, useEffect} from 'react'
import { WEATHER_API_KEY } from '@env'
import { ActivityIndicator } from "react-native"

export const useGetWeather = () => {
const [loading, setLoading] = useState(true) //when app 1st launches the indicator will be seen
const [location, setLocation] = useState(null)
const [error, setError] = useState(null)
const [weather, setWeather] = useState([])

const fetchWeatherData = async() => {
  try {
    const res = await fetch(`http://api.openweathermap.org/data/forecast?appid=${WEATHER_API_KEY}`) //place desired url inside fetch function
    const data = await res.json()
    setWeather(data)
  }catch (error) {
    setError('Could not fetch weather')
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  (async() => {
    let { status } = await Location.requestForegroundPermissionsAsync() //have to install with npx expo install expo-location
    if (status !== 'granted') {
      setError('Permission to access location was denied')
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
    await fetchWeatherData()
  })() //immediately invokes function
}, []) //empty means no dependencies and will only run once! 

return [loading, error, weather]

}