import React from "react";
import { Text, View } from "react-native";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const Layout = ({ Children }) => {
  return (
    <View className="mt-12 relative flex-1 ">
      <HeaderLayout></HeaderLayout>
      <View className="mt-20">
        <Text>{Children}</Text>
      </View>
    </View>
  );
};

export default Layout;
