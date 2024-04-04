// Name Screen Component
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PreferenceScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextActive, setIsNextActive] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsNextActive(true);
  };


  const handleNext = () => {
    // You can add validation for name here
    navigation.navigate("VideoUploadScreen");
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
        >SHOW ME</Text>
            <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "Men" && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect("Men")}
        >
          <Text style={styles.optionText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "Women" && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect("Women")}
        >
          <Text style={styles.optionText}>Women</Text>
        </TouchableOpacity>
          <Image style = {styles.image} source={require("../../assets/heyboo.png")} resizeMode="contain"/>
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
          <TouchableOpacity
            style={[styles.button, !isNextActive && styles.inactiveButton]}
            onPress={handleNext}
            disabled={!isNextActive}
          >
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
  inactiveButton: {
    backgroundColor: "#CCCCCC", // Dull background color for inactive button
  },
  optionButton:{
    marginBottom: 12,
    borderRadius: 48,
    backgroundColor: '#FF2919',
    paddingHorizontal: 26,
    minWidth: 300,
    paddingVertical: 16
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
  optionText: {
    color: '#222',
    fontSize: 24,
    fontWeight: "700",
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: "#FF7F7F", 
  },
})