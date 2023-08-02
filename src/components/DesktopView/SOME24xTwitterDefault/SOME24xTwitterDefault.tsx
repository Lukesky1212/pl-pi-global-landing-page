import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcoTwitterIcon } from './IcoTwitterIcon.js';
import classes from './SOME24xTwitterDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    icoTwitter?: ReactNode;
  };
}
/* @figmaId 22:3371 */
export const SOME24xTwitterDefault: FC<Props> = memo(function SOME24xTwitterDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icoTwitter}>{props.swap?.icoTwitter || <IcoTwitterIcon className={classes.icon} />}</div>
    </div>
  );
});
