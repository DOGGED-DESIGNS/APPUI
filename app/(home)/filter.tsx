import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons, Images } from "@/constants";
import { Image } from "react-native";
import { router } from "expo-router";

const filter = () => {
  return (
    <SafeAreaView className=" flex-1 px-4 bg-[#737770]">
      <View className="  items-center mb-3 mt-5 flex-row gap-3">
        <TouchableOpacity
          onPress={() => {
            router.push("/(home)/welcome");
          }}
        >
          <Image
            tintColor={"#ffff"}
            resizeMode="contain"
            className="h-10 w-10"
            source={Icons.circularbutton}
          />
        </TouchableOpacity>
        <Text className=" text-base font-DomineBold text-white">
          Add Medicine
        </Text>
      </View>

      <Text className=" text-4xl mt-5 text-white font-DomineBold leading-relaxed">
        Choose Medicine
      </Text>
      <Text className=" text-4xl text-white font-DomineBold ">Type</Text>

      <View className=" mt-[70px] flex-row gap-3">
        <View className=" flex-1  rounded-[40px] px-4 py-10 bg-[#728268] items-center  ">
          <Image
            source={Images.whitetablet}
            resizeMode="contain"
            className=" -mt-[70px] h-[75px] w-[75px]"
          />

          <Text className=" mt-5 text-black font-DomineBold text-2xl">
            {" "}
            Tablet{" "}
          </Text>
        </View>

        {/* this is the capsule section */}
        <View className=" flex-1  rounded-[40px] px-4 py-10 bg-[#67AB92] items-center  ">
          <Image
            source={Images.opencapsule}
            resizeMode="contain"
            className=" -mt-[70px] h-[75px] w-[75px]"
          />

          <Text className=" mt-5 text-black font-DomineBold text-2xl">
            {" "}
            Tablet{" "}
          </Text>
        </View>
      </View>

      {/* this is the second row */}

      <View className=" mt-[60px] flex-row gap-3">
        <View className=" flex-1  rounded-[40px] px-4 py-10 bg-[#E4E4D2] items-center  ">
          <Image
            source={Images.syringe}
            resizeMode="contain"
            className=" -mt-[70px] h-[75px] w-[75px]"
          />

          <Text className=" mt-5 text-black font-DomineBold text-2xl">
            Injection
          </Text>
        </View>

        {/* this is the capsule section */}
        <View className=" flex-1  rounded-[40px] px-4 py-10 bg-[#505B4D] items-center  ">
          <Image
            source={Images.firstaid}
            resizeMode="contain"
            className=" -mt-[70px] h-[65px] w-[65px]"
          />

          <Text className=" mt-5 text-black font-DomineBold text-2xl">
            Others
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        className=" mt-auto mb-5  items-center  justify-center gap-4 w-full flex-row bg-[#F15A22]   rounded-full  "
      >
        <Text className=" font-PoppinsMedium text-xl text-black">Next</Text>
        <Image
          resizeMode="contain"
          className="   h-[59.98] w-[52.54]"
          source={Icons.tabletstroke}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default filter;
