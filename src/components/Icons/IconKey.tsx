import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function IconKey () {
  return (
    <View >
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M16.4917 12.4417C14.775 14.15 12.3167 14.675 10.1584 14L6.23337 17.9167C5.95004 18.2083 5.39171 18.3833 4.99171 18.325L3.17504 18.075C2.57504 17.9917 2.01671 17.425 1.92504 16.825L1.67504 15.0083C1.61671 14.6083 1.80837 14.05 2.08337 13.7667L6.00004 9.85C5.33337 7.68333 5.85004 5.225 7.56671 3.51666C10.025 1.05833 14.0167 1.05833 16.4834 3.51666C18.95 5.975 18.95 9.98333 16.4917 12.4417Z"
          stroke="#7A7B80"
          strokeWidth={1.25}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.7417 14.575L7.65837 16.4917"
          stroke="#7A7B80"
          strokeWidth={1.25}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.0834 9.16669C12.7737 9.16669 13.3334 8.60704 13.3334 7.91669C13.3334 7.22633 12.7737 6.66669 12.0834 6.66669C11.393 6.66669 10.8334 7.22633 10.8334 7.91669C10.8334 8.60704 11.393 9.16669 12.0834 9.16669Z"
          stroke="#7A7B80"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

