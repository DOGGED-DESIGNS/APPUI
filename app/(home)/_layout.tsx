import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { Icons } from "@/constants";
import Doggetabs from "@/components/Doggetabs";

const _layout = () => {
  return (
    <Tabs
      initialRouteName="welcome"
      screenOptions={{
        tabBarStyle: {
          paddingLeft: 48,
          height: 70,
          width: 300,
          alignItems: "center",
          flexDirection: "row",
          //   paddingRight: 20,
          marginBottom: 20,
          backgroundColor: "#7F8179",
          display: "flex",
          position: "absolute",
          //   backdropFilter: "",
          zIndex: 100,
          borderRadius: 100,
        },
      }}
    >
      <Tabs.Screen
        name="stats"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <Doggetabs image={Icons.filter} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="welcome"
        options={{
          headerShown: false,
          tabBarButton: (props) => <Doggetabs image={Icons.round} {...props} />,
        }}
      />
      <Tabs.Screen
        name="filter"
        options={{
          headerShown: false,
          tabBarButton: (props) => <Doggetabs image={Icons.stats} {...props} />,
        }}
      />
    </Tabs>
  );
};

export default _layout;
