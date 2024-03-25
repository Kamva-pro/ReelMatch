import React from "react";
import { View, StyleSheet, Pressable, Text } from 'react-native'
import Card from './src/components/card'
import users from './assets/data/users'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Animated, useSharedValue, useAnimatedStyle} from 'react-native-reanimated'

const App = () => {
  const sharedValue = useSharedValue(0)
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: sharedValue.value * 100
    }
    ],
    opacity: sharedValue.value,
  }))
  return (
    <View style= {styles.pageContainer}>
      <Animated.View style={[styles.animatedCard, cardStyle]}
      >
      <Card user={users[0]}/>
      </Animated.View>
      <Pressable onPress={()=>(sharedValue.value = Math.random())}>
        <Text>Change value</Text>
      </Pressable>
    </View>
    
  ) 
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
 
  animatedCard: {
    width: '100%',  justifyContent: 'center', alignItems: 'center'
  }

})

export default App;