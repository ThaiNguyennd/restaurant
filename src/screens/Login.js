import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CheckBox from "react-native-check-box";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase-config";
import { Toast } from "toastify-react-native";
import InputCustom from "../components/input/InputCustom";
import { useAuth } from "../components/contexts/AuthConText";

const Login = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const {setUserInfo} =useAuth()
  const onSignUp = async (value) => {
    try {
      Toast.success("Login success");
      await signInWithEmailAndPassword(auth, value.email, value.password);
      setUserInfo(auth.currentUser)
      navigation.navigate("home");
    } catch (error) {
      if (error.message.includes("wrong-password"))
        Toast.error("Your password was wrong");
    }
  };
  return (
    <View className="flex-1 text-2xl mt-20 ">
      <View className="items-center">
        <Image
          source={require("../components/Images/logo1.png")}
          className="w-[120px] h-[120px]"
        ></Image>
        <Text className="mt-7 font-bold text-4xl text-[#1fb28a]">Sign In</Text>
      </View>
      <View className=" flex-1 p-10 mb-12 justify-between">
        <View className="gap-5">
          <View>
            <InputCustom
              name="email"
              control={control}
              placeholder="example@gmail.com "
              rules={{
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "please enter the correct format @gmail.com",
                },
              }}
            >
              Email
            </InputCustom>
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
          <View className="flex-row gap-2 ">
            <Text className="text-base">You don't have account</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("register");
              }}
            >
              <Text className=" text-[#0000FF] text-base font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className="py-3 bg-blue-600 flex-2  items-center justify-center  flex-row rounded-md fixed"
            onPress={handleSubmit(onSignUp)}
          >
            {isSubmitting ? (
              <View className="w-5 h-5  border-4 border-t-[20px] border-[white] rounded-full border-t-transparent animate-spin opacity-10 visible"></View>
            ) : (
              <Text className="text-[#ffff] font-semibold text-lg text-center">
                Sign up
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
