import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const images = [
  "https://images.deliany.co/i_86yMBi2WNzM9Vwvm0_0JExIn_XugeTS6uslekUr4c/fill/400/400/ce/1/czM6Ly9tYWZmaWFjby1jYXJhdmFuLWltYWdlcy1wcm9kdWN0aW9uL2F0dGFjaG1lbnRzLzIyYjlmMGIwLTk5MmEtNDZkMy1hNzM3LWFjMGNmYjZjZGY2Zi0xMS5wbmc",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4BsEkAdkRSlmpyrrUwf4SMSvIe5311Mu9plqIx57vWz70m0LNxvV31ntNrpCzjX97kE&usqp=CAU",
];
const width = Dimensions.get("window").width - 20 * 2;
  const height = Dimensions.get("window").height;
const Slider = () => {
  
  const [imgActive, setImgActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={styles.wrap} className="px-3">
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.wrap}
        PagingEnabled
      >
        {images.map((e) => (
          <Image
            key={e}
            resizeMode="stretch"
            style={styles.wrap}
            source={{ uri: e }}
          ></Image>
        ))}
      </ScrollView>
      <View className="items-center flex-row justify-center bg-gray-100 mt-0">
        {images.map((e, index) => (
          <Text
            key={e}
            style={imgActive == index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    width: width,
    height: height * 0.25,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  dot: {
    margin: 3,
    color: "gray",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
});
export default Slider;
