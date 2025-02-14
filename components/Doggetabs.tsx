import {
  Image,
  Pressable,
  StyleSheet,
  type ImageSourcePropType,
  Text,
  View,
  PressableProps,
} from "react-native";
import React from "react";
import { Icons } from "@/constants";

interface ultType extends PressableProps {
  image: ImageSourcePropType;
}
const Doggetabs = ({ image }: ultType) => {
  return (
    <Pressable>
      <View>
        <Image source={image} className="h-12 w-12 " />
      </View>
    </Pressable>
  );
};

export default Doggetabs;
