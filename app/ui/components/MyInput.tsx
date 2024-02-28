import TextField, { TextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

export const MyInput = forwardRef(
	function MyInput(props: TextFieldProps, ref) {
		const { label, ...otherProps } = props;
		
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }} >		
				<p>{label}</p>
				
				<TextField 
					label=""
					variant="outlined" 
					size="small"
					autoComplete='off'
					sx={{ marginBottom: 2 }}
					{...otherProps}
					ref={ref as any}
				/>
			</div>
	)
});