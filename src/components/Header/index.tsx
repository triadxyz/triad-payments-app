import { View, Image } from "react-native";

export default function Header() {
  return (
    <View className="h-20 flex justify-center items-center px-5">
      <Image
        className="w-44 h-12"
        source={require("../../../assets/bsc-logo.png")}
      />
    </View>
  );
}
