import { TouchableOpacity, Text } from "react-native";
import { cn } from "../../../utils/cn";
import IconLoading from "../../Icons/Loading";

type ButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined";
  theme?: "blue" | "white";
  text?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
};

export default function Button({
  onPress,
  variant = "contained",
  theme = "white",
  children,
  loading,
  text,
  className,
  textClassName
}: ButtonProps) {
  const variants = {
    theme: {
      blue: {
        contained: {
          button: "bg-primary text-primary",
          text: "text-white",
        },
        outlined: {
          button: "border border-primary",
          text: "text-primary",
        },
      },
      white: {
        contained: {
          button: "bg-white",
          text: "text-black",
        },
        outlined: {
          button: "border border-white",
          text: "text-white",
        },
      },
    },
  };

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      className={cn(
        "rounded-lg flex items-center justify-center h-12",
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
