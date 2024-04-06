//import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ComponentProps } from 'react';
import style from '@/app/ui/components/scss/myComponents.module.scss';
import type { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';
import { getMask } from '@/app/lib/utils';
import { typeMask } from '@/app/lib/definitions';

interface MyInputProps extends ComponentProps<'input'> {
  label: string,
  isRequired?: boolean,
  mask?: typeMask
}

export function MyInput(props: MyInputProps) {
  const { label, mask, ...otherProps } = props;

  const digitsOnlyMask: MaskitoOptions = {
    mask: getMask(mask)
  }

  const inputRef = useMaskito({ options: digitsOnlyMask })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>      
      <p>{label}</p>
      <input 
        className={style.input}
        autoComplete='off'
        ref={(el) => {
          if (mask) 
            inputRef(el);
        }}
        {...otherProps}
      />
    </div>
  )
};