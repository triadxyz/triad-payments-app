import { Platform, View } from "react-native";
import { cn } from "../src/utils/cn";
import Header from "../src/components/Header";
import { Redirect } from "expo-router";

export default function Page() {
  const user = false

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View className={cn("flex-1 flex-col justify-center bg-black", Platform.OS === "android" ? "pt-8" : "")}>
      <Header />
    </View>
  );
}
