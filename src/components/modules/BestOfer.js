import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase/Firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Plus from "../icons/Plus";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const BestOfer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const colref = collection(db, "combo");
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
  const rederItem = ({ item }) => (
    <View style={styles.wrap}>
      <View>
        <Image source={{ uri: item.imgDemo }} style={styles.img}></Image>
      </View>
      <View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="font-semibold text-lg"
        >
          {item.title}
        </Text>
        <Text
          className="text-gray-400 font-normal "
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.desc}
        </Text>
        <Text className="text-[#f00000]">
          {item.price.toLocaleString("en-US") + " đ"}
        </Text>
        <TouchableOpacity className="mt-1 flex items-end" onPress={()=>{}}>
          <Plus></Plus>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View className="px-1">
      <FlatList
        data={data}
        renderItem={rederItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: width * 0.35,
    height: height * 0.32,
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
    img: {
        width: width * 0.35,
      height: height * 0.2,
        borderRadius:10,
      },
});
export default BestOfer;
