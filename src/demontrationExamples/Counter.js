import React, { useEffect, useState } from "react";
import{ View, Text, Button, StyleSheet} from 'react-native',

const Counter = () => {
   const [count, setCount] = useState(0)
   const [newCount, setNewCount] = useState(0)

   useEffect(() => {
    console.log('count')
    return () => {
        console.log('useeffect clean up')
    }
   }, [count]) //only gives console log when count changes, not newCount
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button color={'red'} title={'Increase the count'} onPress={() => setCount(count+1)}/>
            <Button color={'green'} title={'Decrease the count'} onPress={() => setCount(count-1)}/>
            <Button color={'red'} title={'Increase the count'} onPress={() => setNewCount(count+1)}/>
            <Button color={'green'} title={'Decrease the count'} onPress={() => setNewCount(count-1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        font: 25,
    }

})

export default Counter;