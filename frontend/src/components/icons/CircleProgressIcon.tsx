import { createSvgIcon, SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

type Props = SvgIconProps & {
  value: number;
};

const CircleProgressIcon: React.FC<Props> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fill="#currentColor"
        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      />
      <circle
        r="3.5"
        cx="12"
        cy="12"
        fillOpacity={0}
        strokeWidth="7"
        stroke="currentColor"
        strokeDasharray={7 * Math.PI}
        strokeDashoffset={7 * Math.PI * ((100 - props.value) / 100)}
        transform="rotate(-90 12 12)"
        style={{
          transition: 'stroke-dashoffset 1s ease',
        }}
      />
    </SvgIcon>
  );
};

export default CircleProgressIcon;
