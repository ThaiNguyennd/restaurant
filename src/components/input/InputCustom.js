import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

const InputCustom = ({ children, control, placeholder ="", name ="", rules }) => {
  return (
    <View>
      <Text className="text-xl font-medium">{children}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <View
              className={`${error ? "border border-red-400 rounded-md" : ""}`}
            >
              <TextInput
                className="w-full p-2 px-1  border border-gray-300 rounded-md  "
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder={placeholder}
              />
            </View>
            <Text className="text-[#FF0000]">{error?.message}</Text>
          </View>
        )}
        name={name}
        rules={rules}
      />
    </View>
  );
};

export default InputCustom;
