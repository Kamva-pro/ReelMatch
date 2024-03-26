// Name Screen Component
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GenderOptions from "../components/GenderOptions"; 

export default function GenderScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const handleNext = () => {
    // You can add validation for name here
    navigation.navigate("SexualityScreen");
  };

  return (
    <View style={{ flex: 1, marginTop: 120,}}>
      <View style={{ width: '100%', flex: 1, alignItems: "center", justifyContent: 'center',}}>

          <GenderOptions />
          <Image style = {styles.image} source={require("../../assets/teamwork.png")} resizeMode="contain"/>
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
    fontSize: 18,
    fontWeight: "500",
    textAlign: 'center',
  },
})