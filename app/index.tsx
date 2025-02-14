import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images, Icons } from "@/constants";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className=" items-center  flex-1 bg-[#4C4F4A] ">
      <View className=" mt-10 mb-7 ">
        <Image
          resizeMode="contain"
          className="h-[355px]"
          source={Images.clock}
        />
      </View>

      <Text className=" text-white mt-7   text-4xl font-PoppinsSemiBold">
        Welcome to
      </Text>
      <Text className=" text-white   text-4xl font-PoppinsSemiBold">
        Medico
      </Text>

      <TouchableOpacity
        activeOpacity={0.6}
        className=" mt-14 items-center gap-4 py-1 px-6 flex-row bg-[#F15A22]   rounded-full  "
      >
        {" "}
        <Text className=" font-PoppinsRegular text-black">
          Let's get started
        </Text>
        <Image
          resizeMode="contain"
          className="  h-[49.98] w-[52.54]"
          source={Icons.tabletstroke}
        />
      </TouchableOpacity>
      <Link href={"/"} className=" mt-auto mb-2">
        {" "}
        Already have an account? <Text className=" text-white"> Sign in </Text>
      </Link>
    </SafeAreaView>
  );
};

export default index;
