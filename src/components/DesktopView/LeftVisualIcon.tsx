import { memo, SVGProps } from 'react';

const LeftVisualIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 680 909' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M680 5.69715e-05L680 196.497C546.622 196.497 438.497 304.622 438.497 438L242 438C242 196.099 438.1 0.000228679 680 5.69715e-05Z'
      stroke='#281932'
      strokeWidth={2}
    />
    <path
      d='M0.527344 0.0095402L0.527352 196.506C133.906 196.507 242.03 304.631 242.03 438.009L438.527 438.009C438.527 196.109 242.428 0.00973304 0.527344 0.0095402Z'
      stroke='#281932'
      strokeWidth={2}
    />
    <rect
      width={197}
      height={447}
      transform='matrix(1 4.17286e-08 4.57884e-08 -1 242 909)'
      stroke='#281932'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(LeftVisualIcon);
export { Memo as LeftVisualIcon };
