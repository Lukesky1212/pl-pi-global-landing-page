import { memo, SVGProps } from 'react';

const PlaceholderIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} fill='#EB00FF' />
  </svg>
);
const Memo = memo(PlaceholderIcon2);
export { Memo as PlaceholderIcon2 };
