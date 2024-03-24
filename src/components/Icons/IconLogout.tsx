import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function IconLogout() {
  return (
    <View>
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M7.41663 6.3C7.67496 3.3 9.21663 2.075 12.5916 2.075H12.7C16.425 2.075 17.9166 3.56666 17.9166 7.29166V12.725C17.9166 16.45 16.425 17.9417 12.7 17.9417H12.5916C9.24163 17.9417 7.69996 16.7333 7.42496 13.7833"
          stroke="#FF6C6C"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5001 10H3.01672"
          stroke="#FF6C6C"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.87504 7.20833L2.08337 10L4.87504 12.7917"
          stroke="#FF6C6C"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
