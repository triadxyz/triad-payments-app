import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Button from "../Base/Button";
import { Link, router } from "expo-router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import Input from "../Base/Input";
import IconEmail from "../Icons/IconEmail";
import IconPassWord from "../Icons/IconPassword";
import axios from "axios";
import { useUser } from "../../context/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode } from "base-64";
import Toast from "react-native-toast-message";
import { User } from "../../types";

export type LoginProps = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    setLoading(true);
    try {
      const formData = {
        ...data,
        email: data.email.toLowerCase(),
      };

      const response = await axios.post(
        "https://orca-app-zbodo.ondigitalocean.app/login",
        formData
      );

      const { jwt }: { jwt: string } = response.data;
      const decodedJwtPart = decode(jwt.split(".")[1]);
      AsyncStorage.setItem("bsc-session-token", jwt);

      setUser(JSON.parse(decodedJwtPart) as User);
      Toast.show({
        type: "success",
        text1: "Login realizado com sucesso!",
        text2: "Seja bem-vindo(a)!",
        position: "top",
        visibilityTime: 2000,
      });
      router.push("/home");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Falha ao Fazer Login!",
        text2: "Verifique os dados, e tente novamente!",
        position: "top",
        visibilityTime: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 w-full justify-center"
    >
      <View>
        <Image
          className="w-44 h-12 mb-10 mx-auto"
          source={require("../../../assets/bsc-logo.png")}
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                id="email"
                label="Email"
                icon={<IconEmail color="#7A7B80" />}
                onChangeText={onChange}
                placeholder="Digite seu email"
                value={value}
                classNames={{ input: "h-12 w-full" }}
                keyboardType="email-address"
                textContentType="oneTimeCode"
              />
              {errors.email && (
                <Text className="text-red_100 text-xs text-left mt-0.5">
                  {errors.email.message}
                </Text>
              )}
            </>
          )}
          name="email"
          rules={{
            required: "Campo obrigatório",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
              message: "Email inválido",
            },
          }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              id="password"
              label="Senha"
              icon={<IconPassWord color="#7A7B80" />}
              onChangeText={onChange}
              placeholder="Digite sua senha"
              value={value}
              secureTextEntry={showPassword ? false : true}
              showPassword={showPassword}
              onShowPassword={() => setShowPassword(!showPassword)}
              classNames={{ container: "mt-5", input: "h-12 w-full" }}
            />
          )}
          name="password"
        />
        <TouchableOpacity
          onPress={() => router.push("/recovery")}
          className="w-fit ml-auto"
        >
          <Text className="text-gray_100 text-xs text-right mt-3">
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
        <View className="mt-10 w-full">
          <Button
            loading={loading}
            className="text-black"
            onPress={handleSubmit(onSubmit)}
            text="Entrar"
            theme="white"
          />

          <TouchableOpacity className="w-fit mx-auto">
            <Text className="text-gray_100 text-center mt-3">
              Ainda não tem uma conta?{" "}
              <Link className="underline" href={"/register"}>
                Registre-se
              </Link>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
