//import TextField, { TextFieldProps } from '@mui/material/TextField';
import style from '@/app/ui/scss/myComponents.module.scss';

import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { useMaskito } from '@maskito/react';
import { getMask } from '@/app/lib/utils';
import { typeMask } from '@/app/lib/definitions';

import type { MaskitoOptions } from '@maskito/core';

interface MyInputProps extends ComponentProps<'input'> {
  label: string,
  field: string,
  isRequired?: boolean | undefined,
  mask?: typeMask
}

export function MyInputForm(props: MyInputProps) {
  const { label, mask, field, isRequired, ...otherProps } = props;
  const { register } = useFormContext();
  const { ref: refRegister, ...otherRegister } = register(field);

  const digitsOnlyMask: MaskitoOptions = {
    mask: getMask(mask)
  }

  otherRegister.required = props.isRequired;

  const inputRef = useMaskito({ options: digitsOnlyMask })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>{label}</p>
        {isRequired && <p style={{color: '#c9300e'}}>&nbsp;*</p>}
      </div>
      <input 
        className={style.input}
        autoComplete='off'
        ref={el => {
          refRegister(el);
          
          if (mask) 
            inputRef(el);
        }}
        {...otherProps}
        {...otherRegister}
      />
    </div>
  )
};