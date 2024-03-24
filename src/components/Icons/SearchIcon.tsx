import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import tw from "../../utils/tw";

export default function SearchIcon() {
  return (
    <View>
      <Svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#B8BABF"
        style={tw`h-6 w-6`}
      >
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </Svg>
    </View>
  );
}
