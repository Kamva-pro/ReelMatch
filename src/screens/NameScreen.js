// Name Screen Component
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

export default function NameScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const handleNext = () => {
    // You can add validation for name here
    navigation.navigate("AgeScreen");
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
        >NAME</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            value={name}
            style={{ 
              paddingVertical: 5 , 
              paddingHorizontal: 10,
              color: "#333",
              fontSize: 24,
              borderBottomColor: "#444", 
              borderStyle: "solid",
              borderBottomWidth: 1.5,
              width: "100%"
              
            }} 
          />
                    <Text style={styles.text}>How it will appear on ReelMatch</Text>
          <Image style = {styles.image} source={require("../../assets/XOXO.png")} resizeMode="contain"/>
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