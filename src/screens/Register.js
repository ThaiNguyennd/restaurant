import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from "react-native-check-box";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/Firebase-config";
import { Toast } from "toastify-react-native";

const Register = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSignUp = async (value) => {
    await createUserWithEmailAndPassword(auth, value.email, value.password);
    await updateProfile(auth.currentUser, {
      displayName: value.fullName,
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: value.fullName,
      email: value.email,
      password: value.password,
    });
    Toast.success("register successfully");
    navigation.navigate("login");
  };
  return (
    <View className="flex-1 text-2xl mt-20 ">
      <View className="items-center">
        <Image
          source={require("../components/Images/logo1.png")}
          className="w-[120px] h-[120px]"
        ></Image>
        <Text className="mt-10 font-bold text-5xl text-[#1fb28a]">Sign Up</Text>
      </View>
      <View className=" flex-1 p-10 mb-12 justify-between">
        <View className="gap-5">
          <View>
            <Text className="text-xl font-medium ">User Name</Text>
            <Controller
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <View
                    className={`${
                      error ? "border border-red-400 rounded-md" : ""
                    }`}
                  >
                    <TextInput
                      className="w-full p-2 px-1  border border-gray-300 rounded-md  "
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Enter your name"
                      keyboardType="default"
                    />
                  </View>
                  <Text className="text-[#FF0000]">{error?.message}</Text>
                </View>
              )}
              name="fullName"
              rules={{
                required: "Please enter your userName",
                
              }}
              defaultValue=""
            />
          </View>
          <View>
            <Text className="text-xl font-medium ">Email</Text>
            <Controller
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <View
                    className={`${
                      error ? "border border-red-400 rounded-md" : ""
                    }`}
                  >
                    <TextInput
                      className="w-full p-2 px-1  border border-gray-300 rounded-md  "
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Email@gmail.com"
                      keyboardType="default"
                    />
                  </View>
                  <Text className="text-[#FF0000]">{error?.message}</Text>
                </View>
              )}
              name="email"
              rules={{
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "please enter the correct format @gmail.com",
                },
              }}
              defaultValue=""
            />
          </View>
          <View>
            <Text className="text-xl font-medium ">Password</Text>
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Please enter your password",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
                },
                minLength: {
                  value: 8,
                  message: "your password must be at least 8 charaters",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <View
                    className={`${
                      error ? "border border-red-400 rounded-md" : ""
                    }`}
                  >
                    <TextInput
                      className="w-full  p-2 border border-gray-300 rounded-md "
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      placeholder="Password"
                      secureTextEntry={show}
                    />
                  </View>

                  {error && (
                    <Text className="text-[#FF0000]">{error?.message}</Text>
                  )}
                </View>
              )}
            />
          </View>
          <View>
            <CheckBox
              className=""
              isChecked={isChecked}
              onClick={() => {
                setIsChecked(!isChecked);
                setShow(!show);
              }}
              rightText="show password"
              rightTextStyle={{ fontSize: 16, fontWeight: 500 }}
            ></CheckBox>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className="py-3 bg-blue-600 flex-2  items-center justify-center  flex-row rounded-md"
            onPress={handleSubmit(onSignUp)}
          >
            <Text className="text-[#ffff] font-semibold text-lg text-center">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
