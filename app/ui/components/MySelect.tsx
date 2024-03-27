import { useEffect, useState } from 'react';
import style from '@/app/ui/components/scss/myComponents.module.scss';
import { getList } from '@/app/lib/utils';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';

interface MySelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  label: string,
  table: string,
  field: string
}

interface ITableList {
  id: number,
  name: string
}

export function MySelect(props: MySelectProps) {
  const { label, table, field, ...otherProps } = props;
  const [listValue, setListValue] = useState<JSX.Element[]>([<option key={0} value={0} placeholder='No values' ></option>]);
  const { register } = useFormContext();

  async function getValues() {
    console.log('função getValues');
    
    const result: ITableList[] = await getList(`/table?table=${table}`);    
        
    if (result.length > 0)  {
      const value = result.map((value) => {
        return <option key={value.id} value={value.id}>{value.name}</option>
      })

      setListValue(value);
    }    
  }

  useEffect(() => {
    console.log('Passou no useEffect', props.label);

    getValues();
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} >		
      <p>{label}</p>
      <select className={style.select} {...register(field, {valueAsNumber: true})} {...otherProps} >
        {listValue}
      </select>
    </div>
  )
};