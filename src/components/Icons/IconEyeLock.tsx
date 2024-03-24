import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const IconEyeLock = ({ color }: { color?: string }) => {
  return (
    <View >
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path
          d="M14.5299 9.47L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C12.9899 8.42 13.8799 8.82 14.5299 9.47Z"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.8198 5.77C16.0698 4.45 14.0698 3.73 11.9998 3.73C8.46984 3.73 5.17984 5.81 2.88984 9.41C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.4C20.7799 8.88 20.4199 8.39 20.0499 7.93"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.47 14.53L2 22"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.0003 2L14.5303 9.47"
          stroke={color || '#7A7B80'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default IconEyeLock;
