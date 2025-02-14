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
import { Images, Icons } from "@/constants";

const home = () => {
  return (
    <SafeAreaView className=" flex-1 bg-[#737770] px-4">
      <View className=" mt-5 flex-row   items-center ">
        <View className=" flex-row items-center gap-5">
          <Image
            source={Images.uiface}
            resizeMode="contain"
            className=" rounded-full w-[50px] h-[50px] "
          />

          <Text className=" text-white font-PoppinsRegular">
            {" "}
            Hello, Dogged
          </Text>
        </View>

        <View className="  relative ml-auto ">
          <Image
            resizeMode="contain"
            source={Icons.notification}
            className="  h-7 w-7"
            tintColor={"#FFFFFF"}
          />
          <View className="  left-[55%] bottom[100%]  absolute bg-orange-700  h-5 w-5  rounded-full  items-center justify-center">
            <Text className=" m-0 p-0  font-DomineBold  text-[9px]  text-black">
              8+
            </Text>
          </View>
        </View>
      </View>

      {/*  this is the text */}

      <Text className="  mt-12    leading-relaxed  text-white font-DomineBold text-4xl">
        Todays Medicine Reminder
      </Text>

      {/* this is the deck of cards */}

      <ScrollView>
        <View className=" relative">
          <View className="    gap-4 mt-4 py-10 px-10 bg-[#728268]   rounded-[40px]   ">
            <View className=" mb-1   flex-row gap-4">
              <Image
                source={Icons.alarmclock}
                resizeMode="contain"
                className=" h-5 w-5"
              />
              <Text className=" text-sm font-DomineBold">Bedtime Medicine</Text>
            </View>

            <View className=" flex-row  ">
              <View className=" max-w-[210px]  ">
                <Text className=" text-black text-xl font-DomineBold ">
                  Bactrium tablet
                </Text>
                <Text className=" line-clamp-2 text-sm  font-DomineRegular  mt-2">
                  The drud is very beneficial to your health sdfsjdkl slfjs this
                  i whati
                </Text>
              </View>
              <View className=" ml-auto">
                <TouchableOpacity className=" bg-[#4C4F4A] rounded-full p-6    ">
                  <Text className=" text-white text-sm  font-PoppinsMedium ">
                    {" "}
                    10:00 pm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className=" w-full  -mt-14   gap-4  py-10 px-10 bg-[#67AB92]   rounded-[40px]   ">
            <View className=" mb-3  flex-row gap-4">
              <Image
                source={Icons.alarmclock}
                resizeMode="contain"
                className=" h-5 w-5"
              />
              <Text className=" text-sm font-DomineBold">
                {" "}
                Bedtime Medicine
              </Text>
            </View>

            <View className=" flex-row">
              <View className=" max-w-[210px]  ">
                <Text className=" text-black text-xl font-DomineBold ">
                  Bactrium tablet
                </Text>
                <Text className=" line-clamp-2 text-sm  font-DomineRegular  mt-2">
                  The drud is very beneficial to your health this i whati
                  wasdks;f
                </Text>
              </View>
              <View className=" ml-auto">
                <TouchableOpacity className=" bg-[#E4E4D2] rounded-full p-6    ">
                  <Text className=" text-black text-sm  font-PoppinsMedium ">
                    {" "}
                    10:00 pm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className=" w-full -mt-14    gap-4  py-10 px-10 bg-[#6E6E64]   rounded-[40px]   ">
            <View className=" mb-3  flex-row gap-4">
              <Image
                source={Icons.alarmclock}
                resizeMode="contain"
                className=" h-5 w-5"
              />
              <Text className=" text-sm font-DomineBold">
                {" "}
                Bedtime Medicine
              </Text>
            </View>

            <View className=" flex-row">
              <View className=" max-w-[210px]  ">
                <Text className=" text-black text-xl font-DomineBold ">
                  Bactrium tablet
                </Text>
                <Text className=" text-sm line-clamp-2  font-DomineRegular  mt-2">
                  The drud is very beneficial to your health this i whati
                  sdfsfkl this is what i wanted to do andi whal af lskhslkfs
                  sdflksjdfkls df
                </Text>
              </View>
              <View className=" ml-auto">
                <TouchableOpacity className=" bg-[#EC5626] rounded-full p-6    ">
                  <Text className=" text-black text-sm  font-PoppinsMedium ">
                    {" "}
                    10:00 pm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className=" w-full -mt-14    gap-4  py-10 px-10 bg-[#E4E4D2]   rounded-[40px]   ">
            <View className=" mb-3  flex-row gap-4">
              <Image
                source={Icons.alarmclock}
                resizeMode="contain"
                className=" h-5 w-5"
              />
              <Text className=" text-sm font-DomineBold">
                {" "}
                Bedtime Medicine
              </Text>
            </View>

            <View className=" flex-row">
              <View className=" max-w-[210px]  ">
                <Text className=" text-black text-xl font-DomineBold ">
                  Bactrium tablet
                </Text>
                <Text className=" text-sm line-clamp-2  font-DomineRegular  mt-2">
                  The drud is very beneficial to your health this i whati
                  sdfsfkl this is what i wanted to do andi whal af lskhslkfs
                  sdflksjdfkls df
                </Text>
              </View>
              <View className=" ml-auto">
                <TouchableOpacity className=" bg-[#4C4F4A] rounded-full p-6    ">
                  <Text className=" text-white text-sm  font-PoppinsMedium ">
                    10:00 pm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
