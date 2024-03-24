import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../../src/components/LoginForm";

export default function Login() {
    return (
        <SafeAreaView className="px-5 flex-1 bg-black items-center justify-center">
            <LoginForm />
        </SafeAreaView>
    );
}
