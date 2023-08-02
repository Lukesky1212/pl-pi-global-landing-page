import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IcoLinkedinIcon } from './IcoLinkedinIcon.js';
import classes from './SOME24xLinkedInDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    root?: string;
  };
  swap?: {
    icoLinkedin?: ReactNode;
  };
}
/* @figmaId 22:3374 */
export const SOME24xLinkedInDefault: FC<Props> = memo(function SOME24xLinkedInDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icoLinkedin}>
        {props.swap?.icoLinkedin || <IcoLinkedinIcon className={classes.icon} />}
      </div>
    </div>
  );
});
