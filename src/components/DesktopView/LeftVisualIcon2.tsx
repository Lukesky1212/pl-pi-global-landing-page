import { memo, SVGProps } from 'react';

const LeftVisualIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 134 134' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.52588e-05 1.74296e-05L2.30781e-05 60.1154C40.8052 60.1155 73.8844 93.1947 73.8845 134L134 134C134 59.9938 74.0061 6.99612e-05 1.52588e-05 1.74296e-05Z'
      stroke='#2674E0'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(LeftVisualIcon2);
export { Memo as LeftVisualIcon2 };
