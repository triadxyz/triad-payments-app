import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { cn } from "../../src/utils/cn";
import { useUser } from "../../src/context/User";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Company } from "../../src/types";
import { router } from "expo-router";
import Button from "../../src/components/Base/Button";
import IconPhantom from "../../src/components/Icons/IconPhantom";
import CardToken from "../../src/components/CardToken";

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
    <SafeAreaView className={cn("flex-1 bg-white")}>
      <View className="px-4">
        <View className="flex-row justify-between items-center">
          <Button className="h-auto" onPress={() => console.log("phantom")}>
            {<IconPhantom />}
          </Button>

          <TouchableOpacity
            className="flex-row items-center rounded-full bg-blue_100 h-8 px-3"
            onPress={handleLogout}
          >
            <Text className="text-blue_200 font-medium mr-2">
              🎉 Ganhe recompensas
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-base text-gray_100 mt-4">Saldo da conta</Text>
        <Text className="text-3xl text-dark font-bold">3,524.92 USD</Text>

        <ScrollView
          className="mt-6"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {MOCK_TOKENS.map((item, index) => (
            <CardToken key={index} data={item} />
          ))}
        </ScrollView>

        <View className="flex-row items-center justify-between mt-12">
          <Text className="text-dark text-base font-medium">Últimas transações</Text>
          <Text className="text-blue_200 text-sm font-medium">Ver tudo</Text>
        </View>

        
      </View>
    </SafeAreaView>
  );
}

//
// utils
//

const MOCK_TOKENS = [
  {
    name: "Pyth",
    icon: require("../../assets/icon.png"),
    amount: 100,
    amountInUsd: 104,
    pnl: 10,
  },
  {
    name: "Pyth",
    icon: require("../../assets/icon.png"),
    amount: 100,
    amountInUsd: 104,
    pnl: 10,
  },
  {
    name: "Pyth",
    icon: require("../../assets/icon.png"),
    amount: 100,
    amountInUsd: 104,
    pnl: 10,
  },
  {
    name: "Pyth",
    icon: require("../../assets/icon.png"),
    amount: 100,
    amountInUsd: 104,
    pnl: 10,
  },
];
