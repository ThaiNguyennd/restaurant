import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../../screens/Home";
import Category from "../../screens/Category";
import User from "../../screens/User";
import Setting from "../../screens/Setting";
import HomeIcon from "../icons/HomeIcon";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, _View } from "react-native";

const TabNavigatior = () => {
  const tabIcons = {
    Home: "home",
    Brands: "cutlery",
    orders: "note",
    user: "user",
  };
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center py-2 shadow-lg">
              <FontAwesome
                name="home"
                size={30}
                color={focused ? "#ff9900" : "#000000"}
              ></FontAwesome>
              <Text
                style={{ color: focused ? "#ff9900" : "#000000" }}
                className="font-semibold text-sm"
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="brands"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center  shadow-lg">
              <FontAwesome
                name="cutlery"
                size={25}
                color={focused ? "#ff9900" : "#000000"}
                style={{ marginTop: 5 }}
              ></FontAwesome>
              <Text
                style={{ color: focused ? "#ff9900" : "#000000" }}
                className="font-semibold text-sm"
              >
                Brands
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="order"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center my-2 shadow-lg">
              <FontAwesome
                name="book"
                size={25}
                color={focused ? "#ff9900" : "#000000"}
              ></FontAwesome>
              <Text
                style={{ color: focused ? "#ff9900" : "#000000" }}
                className="font-semibold text-sm"
              >
                Orders
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="user"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center my-2 shadow-lg">
              <FontAwesome
                name="user"
                size={25}
                color={focused ? "#ff9900" : "#000000"}
              ></FontAwesome>
              <Text
                style={{ color: focused ? "#ff9900" : "#000000" }}
                className="font-semibold text-sm"
              >
                user
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigatior;
