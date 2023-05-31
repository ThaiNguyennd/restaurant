import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import HeaderLayout from "../components/layout/HeaderLayout";
import Slider from "../components/layout/Slider";
import Label from "../components/lable/Lable";
import Promotion from "../components/modules/Promotion";
import Brands from "../components/modules/Brands";
import BestOfer from "../components/modules/BestOfer";
import NearKitchen from "../components/modules/NearKitchen";

const Home = ({ navigation }) => {
  return (
    <View className="mt-12  flex bg-slate-100">
      <HeaderLayout></HeaderLayout>
      <ScrollView className=" mb-10">
        <Text className="text-lg font-bold px-3 mt-7">
          👋 Hi,how are you today?
        </Text>
        <Slider></Slider>
        <View className="bg-white py-5 ">
          <Label
            onPress={() => {
              navigation.navigate("promotions");
            }}
          >
            <Text>Promotions</Text>
          </Label>
          <Promotion></Promotion>
        </View>
        <View className="bg-white py-5 mt-8 ">
          <Label
            onPress={() => {
              navigation.navigate("brands");
            }}
          >
            <Text>Brands</Text>
          </Label>
          <Brands></Brands>
        </View>
        <View className="bg-white mt-10 py-5">
          <Label
            onPress={() => {
              navigation.navigate("brands");
            }}
          >
            <Text>Best Offer</Text>
          </Label>
          <BestOfer></BestOfer>
        </View>
        <View className="mt-5 bg-white pt-5">
          <Label
            onPress={() => {
              navigation.navigate("brands");
            }}
          >
            <Text>Near kitchen</Text>
          </Label>
            <NearKitchen></NearKitchen>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
