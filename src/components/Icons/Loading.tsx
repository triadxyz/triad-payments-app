import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Path, Svg } from 'react-native-svg';

type IconLoadingProps = {
  color?: string;
};

const IconLoading = ({ color }: IconLoadingProps) => {
  return (
    <View>
      <Animatable.View
        animation="rotate"
        easing="linear"
        iterationCount="infinite"
        duration={1000}
      >
        <Svg width="16" height="16" viewBox="0 0 8 8" fill={color || "#000"}>
          <Path d="M8 4C8 3.20887 7.7654 2.43552 7.32588 1.77772C6.88635 1.11992 6.26164 0.607232 5.53073 0.304482C4.79983 0.00173133 3.99556 -0.077482 3.21964 0.0768589C2.44371 0.2312 1.73098 0.612163 1.17157 1.17157C0.612163 1.73098 0.2312 2.44371 0.0768589 3.21964C-0.077482 3.99556 0.00173134 4.79983 0.304482 5.53073C0.607232 6.26164 1.11992 6.88635 1.77772 7.32588C2.43552 7.7654 3.20887 8 4 8V6.44095C3.51723 6.44095 3.04529 6.29779 2.64388 6.02957C2.24247 5.76136 1.92961 5.38013 1.74486 4.93411C1.56011 4.48809 1.51177 3.99729 1.60596 3.5238C1.70014 3.0503 1.93262 2.61536 2.27399 2.27399C2.61536 1.93262 3.0503 1.70014 3.52379 1.60596C3.99729 1.51177 4.48809 1.56011 4.93411 1.74486C5.38013 1.92961 5.76136 2.24247 6.02957 2.64388C6.29779 3.04529 6.44095 3.51723 6.44095 4H8Z" />
        </Svg>
      </Animatable.View>
    </View>
  );
};

export default IconLoading;
