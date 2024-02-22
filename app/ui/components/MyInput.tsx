import TextField, { TextFieldProps } from '@mui/material/TextField';

export function MyInput(props: TextFieldProps) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }} >		
			<span>{props.placeholder}</span>
			
			<TextField 
				error={props.error}
				id={props.id}
				name={props.name}
				//label={props.placeholder}
				variant="outlined" 
				size="small"
				sx={{ marginBottom: 2 }}
				value={props.value}
				onChange={props.onChange}
				helperText={props.helperText}
				type={props.type}
			/>
		</div>
	)
}