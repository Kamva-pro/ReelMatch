import React, { useRef, useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, FlatList, LayoutAnimation, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { user1 } from "../../assets/images";
import { heart, chat, dislike } from '../../assets/icons'
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon } from "react-native-heroicons/outline";
import { Video } from "expo-av";
import { chillz, asi, baby, brunette, tangirl, whitegirl } from "../../assets/videos";

const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const flatListRef = useRef(null);
  const videoData = [chillz, asi, baby, brunette, tangirl, whitegirl];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    // Enable layout animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentItemIndex(index);
    }
  }).current;

  const MemoizedVideoItem = React.memo(({ item }) => (
    <View style={styles.videoContainer}>
      <Video
        source={item}
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
        useNativeControls={false}
      />
    </View>
  ));
  
  const renderItem = ({ item, index }) => (
    <View style={styles.videoContainer}>
      {index === currentItemIndex && (
        <Video
          source={item}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
          useNativeControls={false}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Image
            source={user1}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.title}>ReelMatch</Text>
        <TouchableOpacity style={styles.bellIcon}>
          <BellIcon size={25} strokeWidth={2} color="black" />
        </TouchableOpacity>
      </View>

      {/* Video Carousel */}
      <FlatList
        ref={flatListRef}
        data={videoData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={width}
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        {/* Dislike Button */}
        <TouchableOpacity style={styles.controlButton}>
          <Image source={dislike} style={styles.controlIcon} />
        </TouchableOpacity>

        {/* Chat Button */}
        <TouchableOpacity style={styles.controlButton}>
          <Image source={chat} style={styles.controlIcon} />
        </TouchableOpacity>

        {/* Like Button */}
        <TouchableOpacity style={styles.controlButton}>
          <Image source={heart} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: android ? hp(2) : 0,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  avatar: {
    width: hp(4.5),
    height: hp(4.5),
    borderRadius: hp(4.5) / 2,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  bellIcon: {
    padding: 8,
  },
  videoContainer: {
    width,
    height,
  },
  video: {
    flex: 1,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 16,

    paddingBottom: 16,
  },
  controlButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 20,
    marginTop: 16,
    borderWidth: 1.5,
    borderColor: "#2384a2",
  },
  controlIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
 
});
