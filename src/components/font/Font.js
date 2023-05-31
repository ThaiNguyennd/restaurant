import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf"),
  });
};
