import type { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';
import { getMask } from '@/app/lib/utils';
import { typeMask } from '@/app/lib/definitions';
import { Input, InputProps } from '@mantine/core';

interface MyInputProps extends InputProps {
  label: string,
//  isRequired?: boolean,
  mask?: typeMask
}

export function MyInput(props: MyInputProps) {
  const { label, mask, ...otherProps } = props;

  const digitsOnlyMask: MaskitoOptions = {
    mask: getMask(mask)
  }

  const inputRef = useMaskito({ options: digitsOnlyMask })

  return (
    <Input.Wrapper label={label} description="" error="">      
      <Input         
        autoComplete='off'        
        ref={(el) => {
          if (mask) 
            inputRef(el);
        }}
        {...otherProps}
      />
    </Input.Wrapper>
  )
};