import { memo, SVGProps } from 'react';

const BasicBrandCircle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.0258 0.818182L5.53959 0.818183C5.53958 3.91872 3.07098 6.43219 0.0258098 6.4322L0.0258102 11C5.54866 11 10.0258 6.44144 10.0258 0.818182Z'
      fill='#EB3636'
    />
  </svg>
);
const Memo = memo(BasicBrandCircle15Icon);
export { Memo as BasicBrandCircle15Icon };
