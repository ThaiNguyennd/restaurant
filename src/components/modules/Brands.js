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
import { db } from "../../firebase/Firebase-config";
import Label from "../lable/Lable";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Brands = () => {
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
      onPress={() => {
        navigation.navigate("brandDetail", {data: item});
      }}
      key={item.id}
      className=" flex border-gray-200  w-full border-b bg-white "
      style={styles.wrap}
    >
      <Image
        className=""
        style={styles.wrapItem}
        source={{
          uri: item.imgDemo,
        }}
      ></Image>
      <View className="flex flex-row items-center gap-3 mb-1 pl-2 w-full">
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
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 3 + 20 * 3,
    height: height * 0.25,
  },
  wrap: {
    width: width * 0.6,
    height: height * 0.25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  wrapItem: {
    width: width * 0.6,
    height: height * 0.15,
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  text: {},
});
export default Brands;
