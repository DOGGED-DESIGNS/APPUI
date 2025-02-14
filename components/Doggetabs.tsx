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
const Doggetabs = ({ image, onPress, accessibilityState }: ultType) => {
  const isActive = accessibilityState?.selected;

  return (
    <Pressable onPress={onPress}>
      <View>
        <Image
          source={image}
          tintColor={isActive ? "#090B09" : "#535650"}
          className="h-7 w-7 "
        />
      </View>
    </Pressable>
  );
};

export default Doggetabs;
