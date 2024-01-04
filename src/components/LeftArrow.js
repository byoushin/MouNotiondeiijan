import Svg, { Path } from "react-native-svg";

const LeftArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <Path d="M8 16L0 8L8 0L9.42 1.42L2.84 8L9.42 14.58L8 16Z" fill="white" />
    </Svg>
  );
};

export default LeftArrow;
