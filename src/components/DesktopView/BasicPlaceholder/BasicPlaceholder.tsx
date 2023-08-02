import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BasicPlaceholder.module.css';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 21:538 */
export const BasicPlaceholder: FC<Props> = memo(function BasicPlaceholder(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.placeholder}>
        {props.swap?.placeholder || <PlaceholderIcon className={classes.icon} />}
      </div>
    </div>
  );
});
