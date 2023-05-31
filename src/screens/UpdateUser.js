import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputCustom from "../components/input/InputCustom";
import Label from "../components/lable/Lable";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../components/contexts/AuthConText";
import { Toast } from "toastify-react-native";
const UpdateUser = () => {
  const navigation = useNavigation();
  const { userInfo } = useAuth();
  const userId = userInfo.uid;
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    async function fetchData() {
      const colRef = doc(db, "users", userId);
      const singDoc = await getDoc(colRef);
      reset(singDoc.data());
    }
    fetchData();
  }, [categoryId, reset]);
  const onUpadate = async (value) => {
    const colRef = doc(db, "users", userId);
    await updateDoc(colRef, {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      addrest: value.addrest,
      number: value.phone,
    });
    Toast.success("update info user successfully");
    navigation.goBack();
  };
  return (
    <View className="flex-1 mt-12 bg-white">
      <View className="flex items-center justify-center border-b py-3 border-gray-300">
        <Text className="font-bold text-xl ">My Account</Text>
      </View>
      <View className="px-6 mt-5">
        <Text className="font-bold text-xl text-primary mb-3">Information</Text>
        <InputCustom
          control={control}
          name="firstName"
          placeholder="first name"
        >
          First Name
        </InputCustom>
        <InputCustom control={control} name="lastName" placeholder="first name">
          Last Name
        </InputCustom>
        <InputCustom control={control} name="email" placeholder="Email">
          Email
        </InputCustom>
        <InputCustom control={control} name="addrest" placeholder="addrest">
          Address
        </InputCustom>
        <InputCustom control={control} name="phone" placeholder="number">
          Phone number
        </InputCustom>
        <TouchableOpacity
          className="py-3 bg-blue-600 flex-2  items-center justify-center  flex-row rounded-md fixed"
          onPress={handleSubmit(onUpadate)}
        >
          {isSubmitting ? (
            <View className="w-5 h-5  border-4 border-t-[20px] border-[white] rounded-full border-t-transparent animate-spin opacity-10 visible"></View>
          ) : (
            <Text className="text-[#ffff] font-semibold text-lg text-center">
              save
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3 bg-red-400 flex-2  items-center justify-center  flex-row rounded-md mt-3"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text className="text-[#ffff] font-semibold text-lg text-center">
            cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateUser;
