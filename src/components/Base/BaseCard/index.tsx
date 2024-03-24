import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { cn } from "../../../utils/cn";

export type BaseCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: ImageSourcePropType;
  className?: string;
  hiddenOpacity?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

export default function BaseCard({ onPress, ...props }: BaseCardProps) {
  const { title, description, image, subtitle } = props;

  return (
    <TouchableOpacity
      activeOpacity={props.hiddenOpacity ? 1 : 0.5}
      onPress={onPress}
      className={cn(
        "bg-dark_100 mt-4 px-3 w-full flex flex-row justify-between items-center space-x-2 rounded-2xl h-[115px]",
        props.className
      )}
    >
      <View>
        <Image className="w-16 h-16" source={image} />
      </View>
      <View className="w-full">
        {props.subtitle && (
          <Text className="text-white text-sm mb-0.5 opacity-60">
            {subtitle}
          </Text>
        )}
        {props.loading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <View
              key={index}
              className="w-20 mt-1 first-of-type:mt-0 h-4 rounded-lg bg-gray_100 animate-pulse"
            />
          ))
        ) : (
          <>
            <Text className="text-white font-medium text-lg">{title}</Text>
            <Text className="text-white max-w-[260px] opacity-50 text-xs mt-0.5">
              {description}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
