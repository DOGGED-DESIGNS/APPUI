import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Icons } from "@/constants";

const stats = () => {
  return (
    <SafeAreaView className=" px-4 flex-1 bg-[#E4E4D2]">
      <View className=" flex-row items-center ">
        <View className=" items-center mb-3 mt-5 flex-row gap-3">
          <TouchableOpacity
            onPress={() => {
              router.push("/(home)/welcome");
            }}
          >
            <Image
              tintColor={"#000"}
              resizeMode="contain"
              className="h-10 w-10"
              source={Icons.circularbutton}
            />
          </TouchableOpacity>
          <Text className=" text-base font-DomineRegular text-black">
            Add Medicine
          </Text>
        </View>

        <View className=" ml-auto">
          <TouchableOpacity>
            <Image
              tintColor={"#535A4C"}
              source={Icons.house}
              className=" h-7 w-7 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text className=" mt-5 text-black font-DomineBold text-base">
        {" "}
        Medicine name{" "}
      </Text>

      <Text className=" mt-5 text-black text-2xl font-DomineBold ">
        Insuline
      </Text>

      <Text className=" mt-5 line-clamp-3 text-base font-PoppinsLight    text-zinc-700  leading-relaxed ">
        The Insuline is a good drugs converts glucose to energy and help the
        body fuction. Make ensure you dont self medicate as it is issued only
        with a doctors prescription
      </Text>

      {/* this is the time duratio */}
      <ScrollView className=" ">
        <View className=" h-[500px] ">
          <View>
            <Text className=" mt-5 text-base text-zinc-900 font-PoppinsMedium ">
              Time Duration
            </Text>
            <View className=" flex-row ">
              <View className=" mr-auto mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> 35days </Text>
              </View>
            </View>
          </View>
          <View>
            <Text className=" mt-5 text-base text-zinc-900 font-PoppinsMedium ">
              Medicine Time
            </Text>
            <View className=" gap-2 flex-row ">
              <View className="  mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> 12:00pm </Text>
              </View>
              <View className=" mr-auto mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> 9:00pm </Text>
              </View>
            </View>
          </View>
          <View>
            <Text className=" mt-5 text-base text-zinc-900 font-PoppinsMedium ">
              Days in a week
            </Text>
            <View className=" gap-2 flex-row ">
              <View className="  mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> Mon </Text>
              </View>
              <View className="  mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> Tues </Text>
              </View>
              <View className="  mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> Wed </Text>
              </View>
              <View className=" mr-auto mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular"> Thur </Text>
              </View>
            </View>
          </View>
          <View>
            <Text className=" mt-5 text-base text-zinc-900 font-PoppinsMedium ">
              Doses
            </Text>
            <View className=" gap-2 flex-row ">
              <View className=" mr-auto mt-2 bg-[#C3BFAA]  p-5 rounded-full">
                <Text className="text-base font-DomineRegular">
                  {" "}
                  3 times a day{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="  ">
        <TouchableOpacity
          activeOpacity={0.6}
          className=" mt-auto mb-5 py-4  items-center  justify-center gap-4 w-full flex-row bg-[#505A4D]   rounded-full  "
        >
          <Text className=" font-PoppinsMedium text-lg text-white">
            Medicine Taken
          </Text>
          <Image
            resizeMode="contain"
            tintColor={"#ffff"}
            className="   h-[20px] w-[27px]"
            source={Icons.mark}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          className="  py-4 mt-auto mb-5  items-center  justify-center gap-4 w-full flex-row bg-[#F15A22]   rounded-full  "
        >
          <Text className=" font-PoppinsMedium text-lg text-black">
            Change Settings
          </Text>
          <Image
            resizeMode="contain"
            className="   h-[25px] w-[25px]"
            source={Icons.setting}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default stats;
