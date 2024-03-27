import { TouchableOpacity, Text } from "react-native";
import { cn } from "../../../utils/cn";
import IconLoading from "../../Icons/Loading";

type ButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined";
  theme?: "transparent" | "blue" | "black";
  text?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
};

export default function Button({
  onPress,
  variant = "contained",
  theme = "transparent",
  children,
  loading,
  text,
  className,
  textClassName
}: ButtonProps) {
  const variants = {
    theme: {
      transparent: {
        contained: {
          button: "bg-transparent",
          text: "",
        },
        outlined: {
          button: "border-0",
          text: "",
        },
      },
      blue: {
        contained: {
          button: "bg-blue_200 text-white",
          text: "text-white",
        },
        outlined: {
          button: "border border-primary",
          text: "text-primary",
        },
      },
      black: {
        contained: {
          button: "bg-black",
          text: "text-white",
        },
        outlined: {
          button: "border border-black",
          text: "text-black",
        },
      },
    },
  };

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className={cn(
        "rounded-full flex items-center justify-center h-12",
        variants.theme[theme][variant].button,
        className
      )}
    >
      {loading ? (
          <IconLoading />
      ) : (
        <>
          {text && (
            <Text
              className={cn(
                "text-base font-semibold",
                variants.theme[theme][variant].text , textClassName
              )}
            >
              {text}
            </Text>
          )}
          {children}
        </>
      )}
    </TouchableOpacity>
  );
}
