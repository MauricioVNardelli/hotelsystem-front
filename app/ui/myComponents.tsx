import { ButtonHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import TextField, { TextFieldProps } from '@mui/material/TextField';

//Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	//type?: string;
}

export function MyButton({ type, children }: ButtonProps, loading: boolean) {	
	let button;
	
	if (!loading) {
		button = 	<LoadingButton
		          	loading
								loadingPosition="start"
								startIcon={<SaveIcon />}
								variant="outlined"
							>
								{children}
							</LoadingButton>
	} else {
		button = 	<Button variant="contained" type={type} fullWidth>
								{children}
							</Button>
	}
	
	return (
		<div>
			{button}
		</div>
	)
}

//Input
export function MyInput(props: TextFieldProps) {
	return (
		<TextField 
			error={props.error}
			id="outlined-basic" 
			label={props.placeholder} 
			variant="outlined" 
			size="small"
			sx={{ marginBottom: 2 }}
			value={props.value}
			onChange={props.onChange}
			helperText={props.helperText}
			type={props.type}
		/>
	)
}