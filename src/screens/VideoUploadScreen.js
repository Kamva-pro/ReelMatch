import React, { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TrophyIcon } from "react-native-heroicons/solid";
import * as ImagePicker from 'expo-image-picker';
import * as VideoPicker from 'expo-image-picker';
// import { Camera } from 'expo-camera';


export default function VideoUploadScreen() {
  const navigation = useNavigation();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Function to handle video uploading
  const handleVideoUpload = async () => {
    let result = await VideoPicker.launchImageLibraryAsync({
      mediaTypes: VideoPicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      // Access the selected video from the assets array
      console.log("Video selected: ", result.assets[0].uri);
      setSelectedMedia(result.assets[0]);
    }
  
  };

  // Function to handle image uploading
  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      // Access the selected image from the assets array
      console.log("Image selected: ", result.assets[0].uri);
      setSelectedMedia(result.assets[0]);
    }
  };

  const handleNext = () => {
    navigation.navigate("HomeScreen");
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
        >ADD YOUR VIDEO</Text>
         <Text className="text-xl font-semibold text-center uppercase"
        style={{
          textAlign: "center",
          fontSize: 16,
          marginBottom: 24,
          fontStyle: 'italic'
        }}
        >MAX 20 SECONDS</Text>
           <TouchableOpacity
          style={[styles.optionButton ,styles.selectedOption]}
          onPress={handleVideoUpload}
        >
          <Text style={styles.optionText}>Upload Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton,styles.selectedOption]}
          onPress={handleVideoUpload}
        >
          <Text style={styles.optionText}>Record Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, styles.selectedOption]}
          onPress={handleImageUpload}
        >
          <Text style={styles.optionText}>Upload Profile Image</Text>
        </TouchableOpacity>
        {selectedMedia ? (
          <View style={styles.mediaContainer}>
            {selectedMedia.mediaType === 'video' ? (
              <Video
                source={{ uri: selectedMedia.uri }}
                style={styles.media}
                useNativeControls
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{ uri: selectedMedia.uri }}
                style={styles.media}
                resizeMode="contain"
              />
            )}
          </View>
        ) : (
          <Image style={styles.image} source={require("../../assets/be.png")} resizeMode="contain" />
        )}
          {/* <Image style = {styles.image} source={require("../../assets/be.png")} resizeMode="contain"/> */}
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
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
  mediaContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  media: {
    flex: 1,
    width: '100%',
    height: '100%',
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
});
