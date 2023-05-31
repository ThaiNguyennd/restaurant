import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Plus from "../icons/Plus";
import Search from "../icons/Search";

const HeaderLayout = () => {
  return (
    <View className="flex flex-row justify-between items-center mx-4 w-full">
      <View className="flex flex-row  items-center gap-2 shadow-2xl   border-b border-gray-200 ">
        <Image
          source={require("../Images/logo1.png")}
          className="w-12 h-10"
        ></Image>
        <Text className="text-primary font-semibold text-xl">
          Chicken restaurant
        </Text>
      </View>
      <View className="flex flex-row gap-5 mr-7">
        <TouchableOpacity className=" ">
          <Plus></Plus>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <Search></Search>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderLayout;
