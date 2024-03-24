import { View, Text, ScrollView, Dimensions } from "react-native";
import BaseCard from "../Base/BaseCard";
import { services } from "./data";
import { router } from "expo-router";
import { useCallback } from "react";

export default function ServicesList() {
  const windowHeight = Dimensions.get("window").height;

 const handleTypeSelect = useCallback((type: string) => {
   router.push({ pathname: "/call", params: { type } });
 }, [])

  return (
    <View
      style={{ height: "60%", maxHeight: windowHeight }}
      className="pb-2 bg-dark rounded-tr-[40px] shadow rounded-tl-[40px] px-5"
    >
      <Text className="text-white text-center text-lg mt-4 opacity-40">
        Ações de emergência
      </Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="w-full"
      >
        {services.map((service, index) => {
          return (
            <BaseCard
              key={index}
              {...service}
              onPress={()=> handleTypeSelect(service.type)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
