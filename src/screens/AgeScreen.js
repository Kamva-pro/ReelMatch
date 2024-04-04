// Age Screen Component
import React, { useState } from "react";
import { View, TextInput, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AgeScreen() {
  const navigation = useNavigation();
 
  const handleNext = () => {
    // You can add validation for age here
    navigation.navigate("GenderScreen");
  };

  return (
    <View style={{ flex: 1, marginTop: 120,}}>
      <View style={{ width: '100%', flex: 1, alignItems: "center", justifyContent: 'center',}}>
        <Text className="text-xl font-semibold text-center uppercase"
        style={{
          textAlign: "center",
          fontSize: 28,
          marginBottom: 24,
          
        }}
        >Birth Date</Text>
        <TextInput
            placeholder="DD / MM / YYYY"
            style={styles.textInput}
          />
          <Text style={[styles.text, {marginBottom: 48}]}>YOUR AGE WILL APPEAR ON YOUR PROFILE</Text>
          <Text className="text-xl font-semibold text-center uppercase"
        style={{
          textAlign: "center",
          fontSize: 28,
          marginTop: 24,
          
        }}
        >Current City</Text>
        <TextInput
            
            style={styles.textInput}
          />
          <Image style = {styles.image} source={require("../../assets/muchlove.png")} resizeMode="contain"/>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
          <TouchableOpacity style={styles.button} onPress={handleNext  }>
        <Text style={styles.buttonText}>NEXT</Text>
    </TouchableOpacity>
          </View>
        </View>

      
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 24,
    flex: 1,
    alignSelf: "center"

  },
  button:{
    marginBottom: 12,
    borderRadius: 48,
    backgroundColor: '#FF6969',
    paddingHorizontal: 20,
    minWidth: 250,
    paddingVertical: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
  },
  text: {
    marginTop:24,
    color: '#444',
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center',
  },
  textInput: {
    paddingVertical: 5 , 
    paddingHorizontal: 10,
    color: "#333",
    fontSize: 24,
    borderBottomColor: "#444", 
    borderStyle: "solid",
    borderBottomWidth: 1.5,
    width: "80%"
  }
})