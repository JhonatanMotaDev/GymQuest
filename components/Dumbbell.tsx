import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

interface DumbbellProps extends SvgProps {
  size?: number;
  color?: string;
}

export default function Dumbbell({ size = 24, color = 'currentColor', ...props }: DumbbellProps) {
  const dumbbellIcon = [
    "M6.5 6.5h11M4 10h16M6.5 13.5h11",
    "M14 6.5V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.5M14 13.5V16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.5M17.5 10V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6M17.5 10v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6M10.5 10V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6M10.5 10v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6",
  ];

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {dumbbellIcon.map((d, index) => (
        <Path key={index} d={d} />
      ))}
    </Svg>
  );
}