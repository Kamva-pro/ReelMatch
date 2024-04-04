import React from "react";
import { View, Image,Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {facebook, google, phone, arrow} from '../../assets/icons'



export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style ={styles.main}> 
      <ImageBackground style ={styles.image}
      resizeMode="contain"
      source={require('../../assets/reelmatch.png')}
      >
        
         <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("NameScreen")}>
         <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Register Now</Text>
            <Image source={arrow} style={styles.icon}/>
            {/* <Icon style={styles.icon} name="arrowright" size={24} color="white" /> */}
          </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAlt} onPress={()=> navigation.navigate("NameScreen")}>
         <View style={styles.buttonContent}>
         <Image source={google}  />
            <Text style={styles.buttonAltText}>Login with Google</Text>
          </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAlt} onPress={()=> navigation.navigate("NameScreen")}>
         <View style={styles.buttonContent}>
         <Image source={facebook}/>
            <Text style={styles.buttonAltText}>Login with facebook</Text>
          </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonAlt} onPress={()=> navigation.navigate("NameScreen")}>
         <View style={styles.buttonContent}>
         <Image source={phone}/>
            <Text style={styles.buttonAltText}>Login with phone number</Text>
          </View>
    </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  button:{
    marginBottom: 12,
    borderRadius: 48,
    backgroundColor: '#FF6969',
    paddingHorizontal: 20,
    minWidth: 250,
    paddingVertical: 10
  },
  buttonAlt:{
    marginBottom: 12,
    borderRadius: 48,
    backgroundColor: 'white',
    paddingHorizontal: 18,
    minWidth: 250,
    paddingVertical: 12
  },
  buttonAltText:{
    color: '#333',
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'right',
    marginLeft: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'left',
    marginLeft: 10,

  },
  icon:{
    marginLeft: 20
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main:{
    display: 'flex',
    flex: 1,
    justifyContent: 'start',
    backgroundColor: "yellow",
    alignContent: "start"

  }
})

