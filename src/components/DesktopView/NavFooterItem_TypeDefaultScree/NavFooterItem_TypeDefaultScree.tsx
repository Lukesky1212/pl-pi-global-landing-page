import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { NavFooterItemPrimitiveLarge } from '../NavFooterItemPrimitiveLarge/NavFooterItemPrimitiveLarge';
import classes from './NavFooterItem_TypeDefaultScree.module.css';

interface Props {
  className?: string;
  classes?: {
    text?: string;
    label?: string;
    inner?: string;
    navFooterItemPrimitiveLarge?: string;
    root?: string;
  };
  text?: {
    navLabel?: ReactNode;
  };
}
/* @figmaId 22:3267 */
export const NavFooterItem_TypeDefaultScree: FC<Props> = memo(function NavFooterItem_TypeDefaultScree(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <NavFooterItemPrimitiveLarge
        className={`${props.classes?.navFooterItemPrimitiveLarge || ''} ${classes.navFooterItemPrimitiveLarge}`}
        classes={{
          inner: `${props.classes?.inner || ''} ${classes.inner}`,
          text: props.classes?.text || '',
          label: props.classes?.label || '',
        }}
        text={{
          navLabel: props.text?.navLabel || <div className={classes.navLabel}>Nav Label</div>,
        }}
      />
    </div>
  );
});
