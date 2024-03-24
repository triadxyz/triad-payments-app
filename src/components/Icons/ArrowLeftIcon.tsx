import { Path, Svg } from "react-native-svg";

export default function ArrowLeftIcon({color}: {color?: string}) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color || "#fff"}
      className="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </Svg>
  );
}
