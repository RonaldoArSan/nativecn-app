import "@/styles/global.css";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World!</Text>
      <StatusBar style="light" />
    </View>
  );
}
