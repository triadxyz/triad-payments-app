import { View, KeyboardAvoidingView, Platform, Image } from "react-native";
import Button from "../Base/Button";
import { router } from "expo-router";
import { SubmitHandler } from "react-hook-form";
import React from "react";
import Toast from "react-native-toast-message";

export type LoginProps = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const onSubmit = async () => {
    try {
      Toast.show({
        type: "success",
        text1: "Welcome, Davi!",
        position: "top",
        visibilityTime: 2000,
      });
      router.push("/home");
    } catch {}
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 w-full justify-center"
    >
      <View>
        <Image
          className="w-44 h-12 mb-10 mx-auto"
          source={require("../../../assets/splash.png")}
        />
        <View className="mt-10 w-full">
          <Button onPress={onSubmit} text="Connect" theme="blue" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
