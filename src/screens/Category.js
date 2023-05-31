import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { db } from "../firebase/Firebase-config";
import BackIcon from "../components/icons/BackIcon";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Brands = ({  horizontal }) => {
  const navigation = useNavigation();
  const [data, setData] = useState();
  useEffect(() => {
    const colref = collection(db, "brands");
    onSnapshot(colref, (onsapshot) => {
      let result = [];
      onsapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
        setData(result);
      });
    });
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      className=" flex-1  mb-5"
      style={styles.wrap}
      onPress={() => {
        navigation.navigate("brandDetail", { data: item });
      }}
    >
      <Image
        className="w-full aspect-square rounded-lg"
        style={styles.wrapItem}
        source={{
          uri: item.imgDemo,
        }}
      ></Image>
      <View style={styles.text}>
        <View className="flex-1 flex-row items-center gap-3 mb-1 pl-2 w-full">
          <Image
            className="w-6 h-6 rounded-full"
            source={{
              uri: item.avt,
            }}
          ></Image>
          <Text className="text-base font-semibold">{item.name}</Text>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className=" pl-3  text-gray-400 items-center w-full px-2"
          style={styles.text}
        >
          {item.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View className="mt-12">
      <TouchableOpacity
        className=" flex flex-row gap-4 mt-1 mb-2"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon></BackIcon>
        <Text className="font-medium">Back</Text>
      </TouchableOpacity>
      <View className=" w-full h-10 flex items-center justify-center bg-gray-200 mb-8">
        <Text className="text-lg font-semibold">Brands</Text>
      </View>
      <FlatList
        data={data}
        horizontal={horizontal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  wrapItem: {
    width: width / 2 - 20,
  },
  text: {
    width: width / 2 - 20,
    marginTop: 5,
  },
});
export default Brands;
