import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons, Images } from "@/constants";
import { Image } from "react-native";

const filter = () => {
  return (
    <SafeAreaView className=" px-4 bg-[#728268]">
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

      <Text className=" text-lg mt-5 text-white font-DomineBold leading-relaxed">
        Choose Medicine Type
      </Text>

      <View className=" flex-row gap-3">
        <View className=" rounded-3xl p-4 bg-[#728268] items center  ">
          <Image
            source={Images.whitetablet}
            resizeMode="contain"
            className=" -mt-10 h-10 w-10"
          />

          <Text className=" text-black font-DomineBold text-2xl"> Tablet </Text>
        </View>

        {/* this is the capsule section */}
        <View className=" rounded-3xl p-4 bg-[#728268] items center  ">
          <Image
            source={Images.opencapsule}
            resizeMode="contain"
            className=" -mt-10 h-10 w-10"
          />

          <Text className=" text-black font-DomineBold text-2xl">Capsule</Text>
        </View>
      </View>

      {/* this is the second row */}

      <View className=" flex-row gap-3">
        <View className=" rounded-3xl p-4 bg-[#728268] items center  ">
          <Image
            source={Images.syringe}
            resizeMode="contain"
            className=" -mt-10 h-10 w-10"
          />

          <Text className=" text-black font-DomineBold text-2xl">
            Injection{" "}
          </Text>
        </View>

        {/* this is the capsule section */}
        <View className=" rounded-3xl p-4 bg-[#728268] items center  ">
          <Image
            source={Images.firstaid}
            resizeMode="contain"
            className=" -mt-10 h-10 w-10"
          />

          <Text className=" text-black font-DomineBold text-2xl">Others</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        className=" mt-auto items-center gap-4 w-full flex-row bg-[#F15A22]   rounded-full  "
      >
        <Text className=" font-PoppinsRegular text-black">Next</Text>
        <Image
          resizeMode="contain"
          className="   h-[49.98] w-[52.54]"
          source={Icons.tabletstroke}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default filter;
