import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import WelcomeScreen from "../screens/WelcomeScreen";
import AppSplashScreen from "../screens/AppSplashScreen";
import NameScreen from "../screens/NameScreen";
import GenderScreen from "../screens/GenderScreen";
import SexualityScreen from "../screens/PreferenceScreen";
import AgeScreen from "../screens/AgeScreen";
import VideoUploadScreen from "../screens/VideoUploadScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatDetailsScreen from "../screens/ChatDetailsScreen";
// import Reels from "../screens/Reels"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const { colorScheme } = useColorScheme();

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "#3B82F6" : "gray"}
              />
            );
          },
          tabBarActiveTintColor: "#3B82F6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={AppSplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="SexualityScreen" component={SexualityScreen} />
        <Stack.Screen name="AgeScreen" component={AgeScreen} />
        <Stack.Screen name="VideoUploadScreen" component={VideoUploadScreen} />
        {/* <Stack.Screen name="Reels" component={Reels} /> */}

        <Stack.Screen name="HomeScreen" component={HomeTabs} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
