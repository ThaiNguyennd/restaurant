import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase/Firebase-config";
import Label from "../lable/Lable";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Promotion = ({ navigation }) => {
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

  _renderItem = ({ item }) => (
    <View className="">
      <Image style={styles.wrapItem} source={{ uri: item.img }}></Image>
    </View>
  );

  return (
      <FlatList 
        className=""
        data={data}
        renderItem={_renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
      ></FlatList>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: width * 3 + 20 * 2,
    height: height * 0.18,
    borderRadius: 10,
  },
  wrapItem: {
    width: width * 0.6,
    height: height * 0.2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
export default Promotion;
