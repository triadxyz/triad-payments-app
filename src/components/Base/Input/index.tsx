import React, { ComponentProps, ReactNode, forwardRef } from "react";
import {
  TextInput as RNTextInput,
  View,
  Text,
  TouchableOpacity,
  Appearance,
} from "react-native";
import { cn } from "../../../utils/cn";
import IconEyeLock from "../../Icons/IconEyeLock";
import IconEye from "../../Icons/IconEye";

type BaseProps = {
  variant?: "default" | "secondary" | "search";
  id: string;
  label: ReactNode | string;
  classNames?: {
    container?: string;
    input?: string;
    label?: string;
  };
  icon?: ReactNode;
  onShowPassword?: () => void;
  showPassword?: boolean;
  isLabelHidden?: boolean;
};

export type TextInputProps = BaseProps & ComponentProps<typeof RNTextInput>;

const Input = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      classNames,
      label,
      id,
      variant = "default",
      icon,
      onShowPassword,
      showPassword,
      isLabelHidden = false,
      ...inputProps
    },
    ref
  ) => {
    const theme = Appearance.getColorScheme() || "default";

    const commonClasses = {
      default:
        "bg-trasnparent border border-baseGray text-white focus:border-gray_100",
      secondary: "bg-dark focus:border-gray_100",
      search:
        "bg-bsc-gray-500 border-transparent text-bsc-gray-100 focus:border-gray_100",
    };

    return (
      <View className={cn("w-full", classNames?.container)}>
        <Text
          className={cn(
            { hidden: isLabelHidden },
            "text-white text-sm mb-1",
            classNames?.label
          )}
        >
          {" "}
          {label}
        </Text>
        <View style={{ position: "relative", width: "100%" }}>
          {icon && (
            <View className="absolute left-0 top-0 bottom-0 justify-center px-2.5">
              {icon}
            </View>
          )}
          <RNTextInput
            ref={ref}
            className={cn([
              "w-full h-12 rounded text-white px-3 pl-10",
              commonClasses[variant],
              classNames?.input,
            ])}
            keyboardType="default"
            placeholderTextColor={'#7A7B80'}
            keyboardAppearance={theme}
            secureTextEntry={inputProps.secureTextEntry && !showPassword}
            {...inputProps}
          />

          {(showPassword || inputProps?.secureTextEntry) && (
            <TouchableOpacity
              onPress={onShowPassword}
              className="absolute inset-y-0 right-3 flex justify-center items-center focus:outline-none"
            >
              {showPassword ? <IconEyeLock /> : <IconEye />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

export default Input;
