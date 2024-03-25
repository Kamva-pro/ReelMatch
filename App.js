import React, { useRef, useState } from "react";
import {Text, Image, View, StyleSheet, ImageBackground } from 'react-native'
import Video from 'react-native-video'



const App = () => {
  const videoRef = React.useRef(null)

const onBuffer = Buffer =>{
  console.log("buffering")
}

const onError = Error =>{
  console.log("Error loading video")
}
  return (
    <View style= {styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
        source={{uri: "https://st.depositphotos.com/1000686/3738/i/450/depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg"}}
        style={styles.image}
        >
          <View style={styles.card_inner}>
          <Text style={styles.nameText}>Elaine</Text>
        <Text style={styles.ageText}>21</Text>
          </View>

        </ImageBackground>
        
      {/* <Video
      onEnd = {onBuffer}
      onError={onError}
      videoRef= {videoRef}
      style = {styles.image}
      source={require("./assets/girl-1.mp4")}

      /> */}
      </View>
    </View>
    
  ) 
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  image: {width: '100%', height: '100%', borderRadius: 12, overflow: "hidden",justifyContent: "flex-end"
},
  card:{
    width: '95%',
    height: '70%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff"
  },
  ageText: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 25,
    color: "#ffffff",

  },

  card_inner: {
    padding: 12,
  }
})

export default App;