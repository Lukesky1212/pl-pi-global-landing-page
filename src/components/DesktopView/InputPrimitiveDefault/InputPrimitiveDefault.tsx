import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BasicPlaceholder } from '../BasicPlaceholder/BasicPlaceholder';
import { Main24xErrorDefault } from '../Main24xErrorDefault/Main24xErrorDefault';
import { Ellipse2380Icon } from './Ellipse2380Icon.js';
import classes from './InputPrimitiveDefault.module.css';
import { PlaceholderIcon2 } from './PlaceholderIcon2.js';
import { PlaceholderIcon3 } from './PlaceholderIcon3.js';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
    label?: string;
    label2?: string;
    inner?: string;
  };
  hide?: {
    icoBefore?: boolean;
    active?: boolean;
    icoAfter?: boolean;
    error?: boolean;
  };
  text?: {
    name?: ReactNode;
  };
}
/* @figmaId 22:3339 */
export const InputPrimitiveDefault: FC<Props> = memo(function InputPrimitiveDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.inner || ''} ${classes.inner}`}>
        <div className={`${props.classes?.content || ''} ${classes.content}`}>
          {!props.hide?.icoBefore && (
            <div className={classes.icoBefore}>
              <div className={classes.big}>
                <BasicPlaceholder
                  className={classes.basicPlaceholder2}
                  swap={{
                    placeholder: <PlaceholderIcon className={classes.icon} />,
                  }}
                />
              </div>
            </div>
          )}
          <div className={`${props.classes?.label2 || ''} ${classes.label2}`}>
            {!props.hide?.active && (
              <div className={classes.active}>
                <div className={classes.name}>Name</div>
              </div>
            )}
            <div className={`${props.classes?.label || ''} ${classes.label}`}>
              {props.text?.name != null ? props.text?.name : <div className={classes.name2}>Name</div>}
            </div>
          </div>
          {!props.hide?.icoAfter && (
            <div className={classes.icoAfter}>
              <div className={classes.big2}>
                <BasicPlaceholder
                  className={classes.basicPlaceholder4}
                  swap={{
                    placeholder: <PlaceholderIcon2 className={classes.icon2} />,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {!props.hide?.error && (
        <div className={classes.error}>
          <div className={classes.content2}>
            <div className={classes.icoBefore2}>
              <div className={classes.small}>
                <Main24xErrorDefault
                  className={classes.main24xErrorDefault}
                  classes={{ bg: classes.bg }}
                  swap={{
                    ellipse2380: <Ellipse2380Icon className={classes.icon3} />,
                  }}
                />
              </div>
            </div>
            <div className={classes.label3}>
              <div className={classes.label4}>
                <div className={classes.name3}>Name</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
