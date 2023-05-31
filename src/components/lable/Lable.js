import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Label = ({ children, onPress }) => {
  return (
    <View className="flex-row flex items-center justify-between px-3 mb-5">
      <Text className="text-lg font-semibold">{children}</Text>
      <TouchableOpacity
        onPress={onPress}
        className=" rounded-full p-1 bg-red-300 border-gray-200 border"
      >
        <AntDesign name="caretright" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Label;
