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
const Doggetabs = ({ image, onPress }: ultType) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={image} className="h-8 w-8 " />
      </View>
    </Pressable>
  );
};

export default Doggetabs;
