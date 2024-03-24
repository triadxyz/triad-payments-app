import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";

type Props = {
  title: string | string[];
};

export default function RowBack({ title }: Props) {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <View className="flex-row items-center justify-between pt-4 px-2">
        <ArrowLeftIcon color="#2b2774" />
        <Text className="text-black text-sm font-poppins-semibold">{title}</Text>
        <View className="w-5"></View>
      </View>
    </TouchableOpacity>
  );
}
