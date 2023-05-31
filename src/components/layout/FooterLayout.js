import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeIcon from "../icons/HomeIcon";
import UserIcon from "../icons/UserIcon";
import SettingIcon from "../icons/SettingIcon";
import CategoryIcon from "../icons/CategoryIcon";
import { Link } from "@react-navigation/native";

const nav = [
  {
    id: 1,
    title: "home",
    link: "/home",
    icon: <HomeIcon></HomeIcon>,
  },
  {
    id: 2,
    title: "Brands",
    link: "/category",
    icon: <CategoryIcon></CategoryIcon>,
  },
  {
    id: 3,
    title: "user",
    link: "/user",
    icon: <UserIcon></UserIcon>,
  },
  {
    id: 4,
    title: "setting",
    link: "/setting",
    icon: <SettingIcon></SettingIcon>,
  },
];
const FooterLayout = () => {
  return (
    <View className=" absolute bottom-0 w-full   flex flex-row justify-between items-center px-5">
      {nav.map((item) => (
        <Link to={item.link} key={item.id} className={""}>
          <View className="py-2 items-center justify-center flex text-primary">
            <View>{item.icon}</View>
            <Text className="text-primary font-semibold">{item.title}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
};

export default FooterLayout;
