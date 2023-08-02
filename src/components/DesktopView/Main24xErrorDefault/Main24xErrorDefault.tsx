import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse2380Icon } from './Ellipse2380Icon.js';
import classes from './Main24xErrorDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    ellipse2380?: ReactNode;
  };
}
/* @figmaId 22:3368 */
export const Main24xErrorDefault: FC<Props> = memo(function Main24xErrorDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse2380}>
        {props.swap?.ellipse2380 || <Ellipse2380Icon className={classes.icon} />}
      </div>
    </div>
  );
});
