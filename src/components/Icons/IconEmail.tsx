import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const EyeIcon =  ({ color }: {color?: string}) => (
  <View>
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.1667 17.0833H5.83334C3.33334 17.0833 1.66667 15.8333 1.66667 12.9166V7.08329C1.66667 4.16663 3.33334 2.91663 5.83334 2.91663H14.1667C16.6667 2.91663 18.3333 4.16663 18.3333 7.08329V12.9166C18.3333 15.8333 16.6667 17.0833 14.1667 17.0833Z"
        stroke={color || "#7A7B80"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29166 10.2667 8.43332 9.58333L5.83333 7.5"
        stroke={color || "#7A7B80"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
)

export default EyeIcon

