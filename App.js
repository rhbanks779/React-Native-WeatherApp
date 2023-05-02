import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./src/hooks/useGetWeather"

const App = () => {

  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    <NavigationContainer>
    <Tabs weather={weather} />
  </NavigationContainer>
  }

  //loading ? <View style={styles.container}><ActivityIndicator size={'large'} color={'blue'} /></View> : <Tabs/>

  return (
    <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;