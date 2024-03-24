import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

type ButtonActionProps = {
  onPress: () => void;
  isActivated?: boolean;
};

export default function ButtonAction({
  onPress,
  isActivated,
}: ButtonActionProps) {
  const [buttonActivated, setButtonActivated] = useState(false);
  const [touchOpacity, setTouchOpacity] = useState(1);
  const [count, setCount] = useState(5);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const buttonImage = isActivated
    ? require("../../../assets/img/enabledButton.png")
    : require("../../../assets/img/buttonDisabled.png");

  const startTimer = () => {
    const id = setInterval(() => {
      setTouchOpacity((prevOpacity) => Math.min(prevOpacity + 0.1, 1));
      setCount((prevCount) => {
        if (prevCount === 0 && !isActivated) {
          clearInterval(id);
          onPress();
          return prevCount;
        } else {
          return Math.max(prevCount - 1, 0);
        }
      });
    }, 1000);
    setTimerId(id);
  };

  const handlePressIn = () => {
    setButtonActivated(true);
    setCount(5);
    startTimer();
  };

  const handlePressOut = useCallback(() => {
    setButtonActivated(false);
    if (timerId !== undefined) {
      clearInterval(timerId);
      setTimerId(undefined);
    }
    setTouchOpacity(1);
  }, [timerId]);

  return (
    <View className="my-auto items-center">
      {buttonActivated && !isActivated ? (
        <Animatable.Text
          animation="pulse"
          iterationCount="infinite"
          className="text-6xl text-white opacity-50 font-bold"
          style={{ position: "absolute", top: 150 }}
        >
          {count}
        </Animatable.Text>
      ) : null}

      <View
        style={{
          transform: buttonActivated ? [{ scale: 1.1 }] : [{ scale: 1 }],
        }}
      >
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={touchOpacity}
          className="rounded-full"
        >
          <Animatable.View
            animation={isActivated ? "pulse" : ""}
            iterationCount={isActivated ? "infinite" : 1}
          >
            <View className="w-screen my-auto">
              <Image className="h-full w-full" source={buttonImage} />
            </View>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
