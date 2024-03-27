import { View, Image, Text, ImageSourcePropType } from "react-native";
import Badge from "../Base/Badge";

type CardTokenProps = {
  data: {
    name: string;
    icon: string;
    amount: number;
    amountInUsd: number;
    pnl: number;
  };
};

export default function CardToken({ data }: CardTokenProps) {
  return (
    <View className="h-40 w-[140px] mr-2 px-3 py-4 bg-gray_200 rounded-lg flex-col justify-between">
      <View className="flex-row mr-2.5">
        <Image
          className="w-7 h-7 rounded-full text-dark uppercase text-base"
          source={data.icon as ImageSourcePropType}
        />
      </View>

      <View className="w-full items-end">
        <Badge className="bg-gray_200" value={data.pnl} hasPercentage />

        <Text className="text-dark text-xl">{data.amount}</Text>
        <Text className="text-gray_100 text-xs">~${data.amountInUsd}</Text>
      </View>
    </View>
  );
}
