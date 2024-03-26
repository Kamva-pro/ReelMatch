// AppSplashScreen Component
import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

export default function AppSplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 2000); // Change the duration as needed

    return () => clearTimeout(redirectTimeout);
  }, [navigation]);

  // Ensure that SplashScreen.hideAsync is called
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" }}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 300, height: 300, resizeMode: "contain" }}
      />
    </View>
  );
}
