import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { useAuth } from "../components/contexts/AuthConText";
import { height, width } from "../components/constants/With";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const { userInfo } = useAuth();
  const navigation = useNavigation();
  return (
    <View className="mt-12 bg-white px-2 flex-1" style={styles.container}>
      <Text className="text-4xl font-bold text-primary mb-5">Hello</Text>
      <View className=" flex-row items-center justify-between px-2">
        <View className="flex flex-row items-center ">
          <Image
            source={require("../components/Images/user.png")}
            className="w-14 h-14"
          ></Image>
          <Text className="text-blue-500 font-bold text-2xl">
            {userInfo.displayName}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("userUpdate", { user: userInfo });
          }}
        >
          <Text className="text-blue-400 font-medium text-lg">Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-gray-400 p-2 rounded-xl mt-5 items-center"
        style={styles.logout}
      >
        <Text className="text-xl font-bold ">Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("order");
        }}
        className="bg-slate-300 py-3 flex-row items-center justify-between mt-5 rounded-lg px-2"
      >
        <Text>Your order</Text>
        <AntDesign name="caretright" size={15} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-slate-300 py-3 flex-row items-center justify-between mt-5 rounded-lg px-2">
        <Text>about us</Text>
        <AntDesign name="caretright" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  logout: {
    //   width: width * 0.5,
  },
});
export default User;
