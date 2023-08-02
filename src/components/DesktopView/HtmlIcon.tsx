import { memo, SVGProps } from 'react';

const HtmlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 30.865V27.2888L18.336 20.1364V24.3222L8.1984 29.0769L18.336 33.9129V38.3019L4 30.865Z' fill='white' />
    <path d='M30.8216 14H34.0301L25.3261 42H22.1176L30.8216 14Z' fill='white' />
    <path
      d='M52 27.2888V30.865L37.664 38.0174V33.8316L47.8016 29.0769L37.664 24.2409V19.852L52 27.2888Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(HtmlIcon);
export { Memo as HtmlIcon };
