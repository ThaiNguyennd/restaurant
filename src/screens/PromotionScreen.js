import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,TouchableOpacity
} from "react-native";
import { db } from "../firebase/Firebase-config";
import BackIcon from "../components/icons/BackIcon";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PromotionScreen = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const colref = collection(db, "promotions");
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
  console.log(data);
  const renderItem = ({ item }) => (
    <View className=" mb-8 px-2  flex-1 item-start" style={styles.item}>
      <View className=" ">
        <Image
          className=" w-full aspect-square rounded-lg"
          style={styles.wrapItem}
          source={{ uri: item?.img }}
        ></Image>
      </View>
      <View className="mt-3">
        <Text className="font-medium text-base">{item.title}</Text>
        <Text className="font-normal text-sm text-gray-400">{item.time}</Text>
      </View>
    </View>
  );
  return (
    <View className="mt-12 p-2 pb-30 flex-1">
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
        <Text className="text-lg font-semibold">Promotions</Text>
      </View>
      <FlatList
        className="flex-1"
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapItem: {
    width: width /2 -20,
  }
});
export default PromotionScreen;
