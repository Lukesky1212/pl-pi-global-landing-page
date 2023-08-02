import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcoInstaIcon } from './IcoInstaIcon.js';
import classes from './SOME24xInstaDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    icoInsta?: ReactNode;
  };
}
/* @figmaId 22:3380 */
export const SOME24xInstaDefault: FC<Props> = memo(function SOME24xInstaDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icoInsta}>{props.swap?.icoInsta || <IcoInstaIcon className={classes.icon} />}</div>
    </div>
  );
});
