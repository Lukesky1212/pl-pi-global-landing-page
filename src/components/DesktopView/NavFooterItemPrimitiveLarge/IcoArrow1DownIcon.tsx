import { memo, SVGProps } from 'react';

const IcoArrow1DownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.4714 0.528596C9.73175 0.788945 9.73175 1.21106 9.4714 1.4714L5.4714 5.4714C5.21106 5.73175 4.78895 5.73175 4.5286 5.4714L0.528596 1.4714C0.268246 1.21106 0.268246 0.788945 0.528596 0.528596C0.788945 0.268246 1.21106 0.268246 1.4714 0.528596L5 4.05719L8.5286 0.528596C8.78895 0.268246 9.21106 0.268246 9.4714 0.528596Z'
      fill='#281932'
    />
  </svg>
);
const Memo = memo(IcoArrow1DownIcon);
export { Memo as IcoArrow1DownIcon };
