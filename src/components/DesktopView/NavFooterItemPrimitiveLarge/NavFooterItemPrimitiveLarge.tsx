import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Main24xArrow1Down } from '../Main24xArrow1Down/Main24xArrow1Down';
import { IcoArrow1DownIcon } from './IcoArrow1DownIcon.js';
import classes from './NavFooterItemPrimitiveLarge.module.css';

interface Props {
  className?: string;
  classes?: {
    inner?: string;
    root?: string;
    text?: string;
    label?: string;
  };
  text?: {
    navLabel?: ReactNode;
  };
}
/* @figmaId 22:3287 */
export const NavFooterItemPrimitiveLarge: FC<Props> = memo(function NavFooterItemPrimitiveLarge(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.inner || ''} ${classes.inner}`}>
        <div className={`${props.classes?.label || ''} ${classes.label}`}>
          <div className={`${props.classes?.text || ''} ${classes.text}`}>
            {props.text?.navLabel != null ? props.text?.navLabel : <div className={classes.navLabel}>Nav Label</div>}
          </div>
        </div>
      </div>
    </div>
  );
});
