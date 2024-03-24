import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const IconPassWord = ({ color }: { color?: string }) => (
  <View>
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M5 8.33335V6.66669C5 3.90835 5.83333 1.66669 10 1.66669C14.1667 1.66669 15 3.90835 15 6.66669V8.33335"
        stroke={color || "#7A7B80"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1667 18.3333H5.83334C2.50001 18.3333 1.66667 17.5 1.66667 14.1666V12.5C1.66667 9.16665 2.50001 8.33331 5.83334 8.33331H14.1667C17.5 8.33331 18.3333 9.16665 18.3333 12.5V14.1666C18.3333 17.5 17.5 18.3333 14.1667 18.3333Z"
        stroke={color || "#7A7B80"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3304 13.3334H13.3379"
        stroke={color || "#7A7B80"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99624 13.3334H10.0037"
        stroke={color || "#7A7B80"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66209 13.3334H6.66957"
        stroke={color || "#7A7B80"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default IconPassWord;
