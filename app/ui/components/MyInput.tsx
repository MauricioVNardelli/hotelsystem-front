//import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ComponentProps } from 'react';
import style from '@/app/ui/components/scss/myComponents.module.scss';
import { useFormContext } from 'react-hook-form';
import type { MaskitoMask, MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';

interface MyInputProps extends ComponentProps<'input'> {
  label: string,
  field: string,
  isRequired?: boolean,
  mask?: "cep" | "cpf" | "cnpj" | "date" | "tel" | "cel"
}

export function MyInput(props: MyInputProps) {
  const { label, mask, field, ...otherProps } = props;
  const { register } = useFormContext();
  const { ref: refRegister, ...otherRegister } = register(field);

  let maskArr: MaskitoMask = [];

  switch(mask) {
    case "cep":
      maskArr = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      break;
    case "cpf":
      maskArr = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      break;
    case "cnpj":
      maskArr = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      break;
    case "cel":
      maskArr = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      break;
    case "tel":
      maskArr = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      break;
  }

  const digitsOnlyMask: MaskitoOptions = {
    mask: maskArr
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
            inputRef(el)
        }}
        {...otherProps}
        {...otherRegister} 
      />
    </div>
  )
};