import style from '@/app/ui/scss/myComponents.module.scss';

import { useEffect, useState } from 'react';
import { getList } from '@/app/lib/utils';
import { useFormContext } from 'react-hook-form';

interface MySelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  label: string,
  table: string,
  field: string
}

type TableList = {
  id: number,
  name: string
}

export function MySelect(props: MySelectProps) {
  const { label, table, field, ...otherProps } = props;
  const [listValue, setListValue] = useState<JSX.Element[]>([<option key={0} value={0} placeholder='No values' ></option>]);
  const { register } = useFormContext();

  async function getValues() {
    const result: TableList[] = await getList('', `/enum?table=${table}`);    

    if (result.length > 0)  {
      const value = result.map((value) => {
        return <option key={value.id} value={value.id}>{value.name}</option>
      })
      
      setListValue(value);
    }    
  }

  useEffect(() => {
    getValues();
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} >		
      <p className={style.label}>{label}</p>
      <select className={style.select} {...register(field, {valueAsNumber: true})} {...otherProps} >
        {listValue}
      </select>
    </div>
  )
};