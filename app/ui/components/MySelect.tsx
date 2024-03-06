import { MenuItem, Select } from '@mui/material';
import { SelectProps } from '@mui/material';
import { forwardRef } from 'react';

interface MySelectProps extends SelectProps {
  list: Record<string, string>,
}

/*interface MySelectProps extends HTMLSelectElement {
  label: string,
  list: Record<string, string>,
}*/

export const MySelect = forwardRef(
  function MySelect(props: MySelectProps, ref) {		
    const { label, ...otherProps } = props;

    /*const listValue = Object.entries(props.list).map(([key, value]) => {
      return <option key={key} value={key}>{value}</option>
    })*/

    const listValue = Object.entries(props.list).map(([key, value]) => {
      return <MenuItem key={key} value={key}>{value}</MenuItem>
    })

		return (
			<div style={{ display: 'flex', flexDirection: 'column' }} >		
				<p>{label}</p>
				
        <Select
          ref={ref as any}
          size='small'
          defaultValue={''}
          sx={{ marginBottom: 2 }}
          {...otherProps}          
        >
          {listValue}
        </Select>
			</div>
	  )
    
    /*return (
			<div style={{ display: 'flex', flexDirection: 'column' }} >		
				<p>{label}</p>
				
        <select
          ref={ref as any}
          {...otherProps}          
        >
          {listValue}
        </select>
			</div>
	  )*/
  }
);