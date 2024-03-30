//import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ComponentProps } from 'react';
import style from '@/app/ui/components/scss/myComponents.module.scss';
import { useFormContext } from 'react-hook-form';
import type { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';
import { getMask } from '@/app/lib/utils';
import { typeMask } from '@/app/lib/definitions';

interface MyInputProps extends ComponentProps<'input'> {
  label: string,
  field: string,
  isRequired?: boolean,
  mask?: typeMask
}

export function MyInputForm(props: MyInputProps) {
  const { label, mask, field, ...otherProps } = props;
  const { register } = useFormContext();
  const { ref: refRegister, ...otherRegister } = register(field);

  const digitsOnlyMask: MaskitoOptions = {
    mask: getMask(mask)
  }

  const inputRef = useMaskito({ options: digitsOnlyMask })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>      
      <p>{label}</p>
      <input 
        className={style.input}
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