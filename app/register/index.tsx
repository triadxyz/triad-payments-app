import { View, Text, SafeAreaView } from "react-native";
import RegisterForm from "../../src/components/RegisterForm";

export default function Register() {
    return (
        <SafeAreaView className="flex-1 bg-black py-10 items-center">
            <View className="w-full px-5 h-full">
                <Text className="text-xl text-white font-semibold">
                    Seja bem-vindo
                </Text>
                <Text className="text-sm text-gray_100">
                    preecha os campos abaixo para criar sua conta
                </Text>

                <RegisterForm />
            </View>
        </SafeAreaView>
    )
}
