import { memo, SVGProps } from 'react';

const BasicBrandCircle11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.72372 6.27272C5.33037 6.27272 6.63281 4.97027 6.63281 3.36363C6.63281 1.75698 5.33037 0.454535 3.72372 0.454535C2.11707 0.454535 0.814631 1.75698 0.814631 3.36363C0.814631 4.97027 2.11707 6.27272 3.72372 6.27272ZM3.72372 4.96764C4.60959 4.96764 5.32773 4.2495 5.32773 3.36363C5.32773 2.47776 4.60959 1.75962 3.72372 1.75962C2.83785 1.75962 2.11971 2.47776 2.11971 3.36363C2.11971 4.2495 2.83785 4.96764 3.72372 4.96764Z'
      fill='#EB3636'
    />
  </svg>
);
const Memo = memo(BasicBrandCircle11Icon);
export { Memo as BasicBrandCircle11Icon };
