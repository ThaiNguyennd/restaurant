import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  VirtualizedScrollView,
} from "react-native";
import { height, width } from "../components/constants/With";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/Firebase-config";
import Plus from "../components/icons/Plus";
const BranDetail = () => {
  const {navigation}=useNavigation()
  const route = useRoute();
  const data = route.params.data;
  const [addData, setAddData] = useState();
  useEffect(() => {
    const colref = collection(db, "add");
    onSnapshot(colref, (onsapshot) => {
      let result = [];
      onsapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
        setAddData(result);
      });
    });
  }, []);
  const handleAdd = () => {
    navigation.navigate("",{data:item})
  };
  const _renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleAdd}
      className="bg-slate-200 shadow-sm flex-1 flex-row px-2 gap-2 mt-3" style=
      {styles.item}>
      <Image
        source={{ uri: item.imgDemo }}
        className="w-24 h-24 object-cover rounded-md"
      ></Image>
      <View className="flex-1" style={styles.right}>
        <Text numberOfLines={1} ellipsizeMode="tail" className="text-xl">
          {item.title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" className=" mr-5">
          {item.desc}
        </Text>
        <View className=" flex-row flex-1 items-center justify-between mt-4">
          <Text className="text-red-500">
            {item.price.toLocaleString("en-US") + " đ"}
          </Text>
          <Plus></Plus>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View className="bg-white h-full flex-1">
      <Image source={{ uri: data.imgDemo }} style={styles.img}></Image>
      <View className="rounded-t bg-white px-4 " style={styles.container}>
        <View className="w-16 h-16 rounded-full relative">
          <Image
            source={{ uri: data.avt }}
            className="w-full h-full object-cover rounded-full absolute -translate-y-6 ml-6"
          ></Image>
        </View>
        <Text className="font-bold text-3xl mb-3">{data.name}</Text>
        <Text className="font-medium text-sm text-gray-500">{data.desc}</Text>
      </View>
      <View className="px-2 flex-1 rounded-md mt-2 w-full mb-10">
        <Text className="font-semibold text-primary text-lg">Menu</Text>
        <FlatList
          className="w-full rounded-md"
          data={addData}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height * 0.25,
  },
  container: {
    width: width,
  },
  item: {
    height: height * 0.13,
  },
  right: {
    // width: width *0.5,
  },
});
export default BranDetail;
