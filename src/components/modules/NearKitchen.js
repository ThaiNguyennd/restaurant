import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { db } from "../../firebase/Firebase-config";
import { AntDesign } from "@expo/vector-icons";

const NearKitchen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const colref = collection(db, "location");
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
    <TouchableOpacity className="flex-1  px-2  mb-5 gap-3">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold">{item.name}</Text>
        <AntDesign name="caretright" size={15} color="black" />
      </View>
      <Text className="text-sm text-gray-300">{item.desc}</Text>
      <View className="p-3 bg-green-300 text-white w-24 items-center rounded-lg">
        <Text>Openning</Text>
      </View>
      <View className="border border-gray-50 border--t"></View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default NearKitchen;
