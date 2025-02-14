import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons } from "@/constants";
import { Image } from "react-native";

const filter = () => {
  return (
    <SafeAreaView className=" bg-[#728268]">
      <View className=" mt-5 flex-row gap-3">
        <Image
          tintColor={"#ffff"}
          resizeMode="contain"
          className="h-8 w-8"
          source={Icons.circularbutton}
        />
        <Text className=" text-base font-DomineBold text-white">
          Add Medicine
        </Text>
      </View>

      <Text className=" text-lg text-white font-DomineBold leading-relaxed">
        Choose Medicine Type
      </Text>

      <View className=" flex-row gap-3">
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default filter;
