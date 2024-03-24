import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Input from "../Base/Input";
import Button from "../Base/Button";
import { Link } from "expo-router";
import IconEmail from "../Icons/IconEmail";
import IconPassWord from "../Icons/IconPassword";
import IconUser from "../Icons/IconUser";
import IconKey from "../Icons/IconKey";
import { useUser } from "../../context/User";
import Toast from "react-native-toast-message";
import { decode } from "base-64";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../types";

export type RegisterProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
};

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterProps>();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: RegisterProps) => {
    setLoading(true);
    const { password, confirmPassword } = data;

    try {
      if (password !== confirmPassword) {
        Toast.show({
          type: "error",
          text1: "as senhas não conferem!",
          position: "top",
          visibilityTime: 2000,
        });
        return;
      }

      const response = await axios.post(
        "https://orca-app-zbodo.ondigitalocean.app/register",
        data
      );

      const { jwt }: { jwt: string } = response.data;
      const decodedJwtPart = decode(jwt.split(".")[1]);

      AsyncStorage.setItem("bsc-session-token", jwt);

      setUser(JSON.parse(decodedJwtPart) as User);
    } catch (error) {
      console.error("Erro ao registrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={{ paddingHorizontal: 0 }}
    >
      <View className="flex-1 mt-2 justify-between">
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              id="name"
              icon={<IconUser />}
              label="Nome"
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
              classNames={{ container: "mt-2" }}
            />
          )}
          name="name"
          rules={{ required: "Campo obrigatório" }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Email"
              id="email"
              icon={<IconEmail />}
              label="Email"
              onChangeText={onChange}
              value={value}
              classNames={{ container: "mt-2" }}
            />
          )}
          name="email"
          rules={{
            required: "Campo obrigatório",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
              message: "Insira um email válido",
            },
          }}
          defaultValue=""
        />
        {errors.email && <Text className="text-xs text-red_100 mt-0.5">{errors.email.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Senha"
              id="password"
              icon={<IconPassWord />}
              placeholder="Senha"
              secureTextEntry={showPassword ? false : true}
              showPassword={showPassword}
              onShowPassword={() => setShowPassword(!showPassword)}
              onChangeText={onChange}
              classNames={{ container: "mt-2" }}
              value={value}
            />
          )}
          name="password"
          rules={{ required: "Campo obrigatório" }}
          defaultValue=""
        />
        {errors.password && <Text>{errors.password.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirmar Senha"
              id="confirm-password"
              icon={<IconPassWord />}
              secureTextEntry={showPassword ? false : true}
              showPassword={showPassword}
              onShowPassword={() => setShowPassword(!showPassword)}
              onChangeText={onChange}
              classNames={{ container: "mt-2" }}
              value={value}
            />
          )}
          name="confirmPassword"
          rules={{ required: "Campo obrigatório" }}
        />
        {errors.password && (
          <Text className="text-xs text-red-500">
            *{errors.confirmPassword?.message}
          </Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Código"
              id="code"
              icon={<IconKey />}
              classNames={{ container: "mt-2" }}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="code"
          rules={{ required: "Campo obrigatório" }}
        />
      </View>
      <View className="flex-1 mt-10 justify-end">
        <Button
          loading={loading}
          text="Criar Conta"
          onPress={handleSubmit(onSubmit)}
        />

        <TouchableOpacity className="w-fit">
          <Text className="text-gray_100 text-center mt-3">
            Já tem uma Conta ?{" "}
            <Link className="underline" href={"/login"}>
              Faça Login
            </Link>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
