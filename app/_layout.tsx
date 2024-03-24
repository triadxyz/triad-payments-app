import { Platform, SafeAreaView } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { cn } from "../src/utils/cn";
import UserProvider from "../src/context/User";
import Toast from "react-native-toast-message";

export const unstable_settings = {
  initialRouteName: "/index",
};

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);



  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <SafeAreaView onLayout={onLayoutRootView} className={cn("flex-1 bg-black", Platform.OS !== 'ios' && "pt-10")}>
        <StatusBar backgroundColor="#000" style="dark" />
        <UserProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
            animation: "simple_push"
          }}
        >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="login/index" options={{}} />
          <Stack.Screen name="register/index" options={{}} />
          <Stack.Screen name="home/index" options={{}} />
          <Stack.Screen name="call/index" options={{}} />
        </Stack>
        </UserProvider>
        <Toast />
      </SafeAreaView>
  );
}
