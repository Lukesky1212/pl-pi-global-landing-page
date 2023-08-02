import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { InputPrimitiveDefault } from '../InputPrimitiveDefault/InputPrimitiveDefault';
import classes from './InputDefault_SizeXLargeStateDe.module.css';

interface Props {
  className?: string;
  classes?: {
    label?: string;
    label2?: string;
    content?: string;
    inner?: string;
    inputPrimitiveDefault?: string;
    root?: string;
  };
  hide?: {
    icoBefore?: boolean;
    active?: boolean;
    icoAfter?: boolean;
    error?: boolean;
  };
}
/* @figmaId 22:3309 */
export const InputDefault_SizeXLargeStateDe: FC<Props> = memo(function InputDefault_SizeXLargeStateDe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <InputPrimitiveDefault
        className={`${props.classes?.inputPrimitiveDefault || ''} ${classes.inputPrimitiveDefault}`}
        classes={{
          content: `${props.classes?.content || ''} ${classes.content}`,
          label: props.classes?.label || '',
          label2: props.classes?.label2 || '',
          inner: props.classes?.inner || '',
        }}
        hide={{
          icoBefore: true,
          active: true,
          icoAfter: true,
          error: true,
        }}
        text={{
          name: <div className={classes.name}>Name</div>,
        }}
      />
    </div>
  );
});
