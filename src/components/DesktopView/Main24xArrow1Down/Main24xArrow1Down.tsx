import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcoArrow1DownIcon } from './IcoArrow1DownIcon.js';
import classes from './Main24xArrow1Down.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    icoArrow1Down?: ReactNode;
  };
}
/* @figmaId 22:3296 */
export const Main24xArrow1Down: FC<Props> = memo(function Main24xArrow1Down(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icoArrow1Down}>
        {props.swap?.icoArrow1Down || <IcoArrow1DownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
