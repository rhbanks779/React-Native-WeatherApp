import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
const {main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData
const weatherCondition = weather[0].main

return (
  <SafeAreaView style={[styles.wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
    <View style={styles.container}>
      <Feather name={weatherType[weatherCondition].icon} size={100} color='white' />
      <Text style={styles.tempStyle}>{temp}</Text>
      <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
      <RowText messageOne={`High: ${temp_max}`} messageTwo={`Low: ${temp_min}`} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
      </View>
      <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    marginBottom: 40,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  tempStyle: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row'
  }, 
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  }
})

export default CurrentWeather;