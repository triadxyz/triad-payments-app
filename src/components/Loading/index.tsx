import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  return (
    <View className="w-full h-full absolute bg-black/30 justify-center items-center">
      <ActivityIndicator size={48} color="#fff" />
    </View>
  );
}
