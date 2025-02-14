import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images, Icons } from "@/constants";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className=" items-center  flex-1 bg-[#737770] ">
      <View className=" mt-10 mb-7 ">
        <Image
          resizeMode="contain"
          className="h-[355px]"
          source={Images.clock}
        />
      </View>

      <Text className=" text-white mt-7   text-4xl  font-DomineBold">
        Welcome to
      </Text>
      <Text className=" text-white font-DomineBold   text-4xl">Medico</Text>

      <TouchableOpacity
        onPress={() => {
          router.push("/(home)/welcome");
        }}
        activeOpacity={0.6}
        className=" mt-14 items-center gap-4 py-1 px-6 flex-row bg-[#F15A22]   rounded-full  "
      >
        <Text className=" font-PoppinsMedium text-xl text-black">
          Let's get started
        </Text>
        <Image
          resizeMode="contain"
          className="   h-[59.98] w-[52.54]"
          source={Icons.tabletstroke}
        />
      </TouchableOpacity>
      <Link href={"/"} className=" mt-auto mb-2">
        Already have an account?
        <Link href={"/"} className=" text-white">
          Sign in
        </Link>
      </Link>
    </SafeAreaView>
  );
};

export default index;
