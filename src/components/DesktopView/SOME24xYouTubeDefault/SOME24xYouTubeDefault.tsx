import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcoYtIcon } from './IcoYtIcon.js';
import classes from './SOME24xYouTubeDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    icoYt?: ReactNode;
  };
}
/* @figmaId 22:3377 */
export const SOME24xYouTubeDefault: FC<Props> = memo(function SOME24xYouTubeDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icoYt}>{props.swap?.icoYt || <IcoYtIcon className={classes.icon} />}</div>
    </div>
  );
});
