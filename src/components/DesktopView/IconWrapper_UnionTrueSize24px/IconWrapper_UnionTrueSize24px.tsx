import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconWrapper_UnionTrueSize24px.module.css';
import { WrapperIcon } from './WrapperIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    wrapper?: ReactNode;
  };
}
/* @figmaId 689:21345 */
export const IconWrapper_UnionTrueSize24px: FC<Props> = memo(function IconWrapper_UnionTrueSize24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.wrapper}>{props.swap?.wrapper || <WrapperIcon className={classes.icon} />}</div>
    </div>
  );
});
