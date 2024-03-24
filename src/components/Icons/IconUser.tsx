import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function IconUser ()  {
    return (
        <View >
            <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <Path
                    d="M10 9.99996C12.3012 9.99996 14.1667 8.13448 14.1667 5.83329C14.1667 3.53211 12.3012 1.66663 10 1.66663C7.69885 1.66663 5.83337 3.53211 5.83337 5.83329C5.83337 8.13448 7.69885 9.99996 10 9.99996Z"
                    stroke="#7A7B80"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333"
                    stroke="#7A7B80"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};

