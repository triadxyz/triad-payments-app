import { Text, View } from "react-native";
import { cn } from "../../../utils/cn";
import { useMemo } from "react";

type BadgeProps = {
  value: number;
  disableBackground?: boolean;
  className?: string;
  isArrowActive?: boolean;
  arrowPosition?: "left" | "right";
  hasDollar?: boolean;
  hasPercentage?: boolean;
};

export function Badge({
  value,
  className,
  disableBackground,
  hasDollar,
  hasPercentage,
}: BadgeProps) {
  const verifyValue = useMemo(() => {
    if (value >= 0) {
      return {
        bg: "#00B4711A",
        text: "text-green_400",
      };
    }

    if (value < 0) {
      return {
        bg: "#EA39431A",
        text: "text-red_400",
      };
    }

    if (disableBackground) {
      return {
        bg: "bg-white",
        text: "",
      };
    }
  }, []);

  return (
    <View
      style={{ backgroundColor: verifyValue?.bg }}
      className={cn(
        "p-1 px-1.5 rounded",
        verifyValue?.bg,
        className
      )}
    >
      <View className="flex-row items-center">
        <Text className={verifyValue?.text}>{value > 0 && "+"}</Text>
        <Text className={verifyValue?.text}>{hasDollar && "$"}</Text>
        <Text className={verifyValue?.text}>{Number(value).toFixed(2)}</Text>
        <Text className={verifyValue?.text}>{hasPercentage && "%"}</Text>
      </View>
    </View>
  );
}

export default Badge;
