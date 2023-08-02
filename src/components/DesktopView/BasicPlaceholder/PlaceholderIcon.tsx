import { memo, SVGProps } from 'react';

const PlaceholderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#EB00FF' />
  </svg>
);
const Memo = memo(PlaceholderIcon);
export { Memo as PlaceholderIcon };
