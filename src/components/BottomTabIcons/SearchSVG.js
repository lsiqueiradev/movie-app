import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { G, Circle, Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

Animated.addWhitelistedNativeProps({
  stroke: true,
});

function SearchSVG({ color, size }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <G
        transform="translate(3 3)"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <AnimatedCircle cx={8} cy={8} r={8} stroke={color} />
        <AnimatedPath d="M18 18l-4.35-4.35" stroke={color} />
      </G>
    </Svg>
  );
}

export default SearchSVG;
