interface RouteParams {
   type: string;
}
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonAction from "../../src/components/ButtonAction";
import axios from "axios";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useUser } from "../../src/context/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowLeftIcon from "../../src/components/Icons/ArrowLeftIcon";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from '@react-navigation/native';

export default function Call() {
  const [isActivated, setIsActivated] = useState(false);
  const { user } = useUser();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();

  const handleButtonPress = async () => {
    const token = await AsyncStorage.getItem("bsc-session-token");

    const data = {
      equipmentId: "1",
      companyId: user?.companyId,
      equipmentBattery: 1,
      type: route.params?.type,
    };

    try {
     await axios.post("https://orca-app-zbodo.ondigitalocean.app/call", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsActivated(true);
      Toast.show({
        type: "success",
        text1: "Chamado de emergência realizado",
        text2: "o Atendimento está a caminho, aguarde!",
        position: "top",
        visibilityTime: 2000,
        autoHide: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="bg-black px-4 h-full">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => router.back()}
      >
        <ArrowLeftIcon color="#ffffff99" />
        <Text className="text-sm opacity-60 text-white font-medium">
          Voltar
        </Text>
      </TouchableOpacity>

      <View className="w-fit mx-auto mt-10 px-4">
        <Text className="text-2xl text-center text-white font-medium">
          {isActivated ? "Botão Acionado" : "Pressione o botão"}
        </Text>
        <Text className="text-gray_100 text-base text-center mt-2">
          {isActivated
            ? "o botão foi acionado com sucesso, Aguarde o atendimento !"
            : " Segure o botão por 5 segundos para confirmar o chamado de emergência."}
        </Text>
      </View>
      <ButtonAction onPress={handleButtonPress} isActivated={isActivated} />
    </SafeAreaView>
  );
}
