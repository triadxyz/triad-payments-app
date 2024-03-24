import {
  Platform,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { cn } from "../../src/utils/cn";
import { useUser } from "../../src/context/User";
import { SafeAreaView } from "react-native-safe-area-context";
import ServicesList from "../../src/components/ServicesList";
import ProfileCard from "../../src/components/ProfileCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Company } from "../../src/types";
import { router } from "expo-router";
import IconLogout from "../../src/components/Icons/IconLogout";

export default function Home() {
  const { user, setUser } = useUser();
  const [companyDetails, setCompanyDetails] = useState<Company>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) return;

      setLoading(true);

      const token = await AsyncStorage.getItem("bsc-session-token");
      try {
        const response = await axios.get(
          `https://orca-app-zbodo.ondigitalocean.app/company/${user.companyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCompanyDetails(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("bsc-session-token");
    setUser(null);
    router.push("/login");
  };

  return (
    <SafeAreaView
      className={cn(
        "flex-1 flex-col justify-between bg-black",
        Platform.OS === "android" ? "pt-8" : ""
      )}
    >
      <View className="px-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white opacity-70 text-sm">Bem-Vindo(a)</Text>
            <Text className="text-white text-2xl font-bold">{user?.name}</Text>
          </View>

          <TouchableOpacity
            className="flex-row items-center"
            onPress={handleLogout}
          >
            <Text className="text-red_150 opacity-80 font-medium mr-2">
              Sair
            </Text>
            <IconLogout />
          </TouchableOpacity>
        </View>

        <ProfileCard
          CompanyName={companyDetails?.name || ""}
          loading={loading}
          CompanyAddress={companyDetails?.address || ""}
        />
      </View>

      <ImageBackground
        source={require("../../assets/img/blur.png")}
        className="absolute top-28 left-0 right-0 bottom-0 z-0 h-full w-full"
        blurRadius={20}
      />

      <ServicesList />
    </SafeAreaView>
  );
}
