//import TextField, { TextFieldProps } from '@mui/material/TextField';
import style from '@/app/ui/scss/myComponents.module.scss';

import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

interface MyTextareaProps extends ComponentProps<'textarea'> {
  label: string,
  field: string,
  isRequired?: boolean | undefined,
  heigth: number
}

export function MyTextarea(props: MyTextareaProps) {
  const { label, field, isRequired, ...otherProps } = props;
  const { register } = useFormContext();



  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>{label}</p>
        {isRequired && <p style={{color: '#c9300e'}}>&nbsp;*</p>}
      </div>
      <textarea 
        className={style.textarea}
        autoComplete='off'
        style={{height: `${props.heigth}px`}}
        {...register(field, {required: isRequired})}
        {...otherProps}
      />
    </div>
  )
};