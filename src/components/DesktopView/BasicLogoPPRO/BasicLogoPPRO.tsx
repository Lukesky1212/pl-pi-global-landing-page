import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BasicLogoPPRO.module.css';
import { IcoIcon } from './IcoIcon.js';

interface Props {
  className?: string;
  classes?: {
    ico?: string;
    root?: string;
  };
  swap?: {
    ico?: ReactNode;
  };
}
/* @figmaId 21:403 */
export const BasicLogoPPRO: FC<Props> = memo(function BasicLogoPPRO(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.ico || ''} ${classes.ico}`}>
        {props.swap?.ico || <IcoIcon className={classes.icon} />}
      </div>
    </div>
  );
});
