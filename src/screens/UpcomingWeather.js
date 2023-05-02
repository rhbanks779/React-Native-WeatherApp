import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import ListItem from "../components/ListItem";


const DATA = [
    {
        dt_txt: '2023-02-18 12:00:00',
        main: {
            temp_max: 8.55,
            tem_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2023-03-18 12:00:00',
        main: {
            temp_max: 9.55,
            tem_min: 4.55
        },
        weather: [
            {
                main: 'Cloudy'
            }
        ]
    },
    {
        dt_txt: '2023-04-18 12:00:00',
        main: {
            temp_max: 10.55,
            tem_min: 3.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
]

const Empty = () => (
    <View>
        <Text>Empty</Text>
    </View>
)


const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} 
            dt_txt={item.dt_txt}
            min={item.main.tem_min}
            max={item.main.temp_max} />
    )

    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
             <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={image}>
            <Text>Upcoming Weather</Text>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            //ItemSeparatorComponent={() => <View style={{backgroundColor: 'red', height: 2}}/>}
            ListEmptyComponent={Empty} />
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather;