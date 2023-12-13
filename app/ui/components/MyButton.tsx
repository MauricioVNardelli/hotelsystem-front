import { ButtonHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
}

export function MyButton({ type, children, loading }: ButtonProps) {	
	let button;
	
	if (loading) {
		button = 	<LoadingButton
		          	loading
								loadingPosition="start"
								startIcon={<SaveIcon />}
								variant="outlined"
								fullWidth
							>
								{children}
							</LoadingButton>
	} else {
		button = 	<Button 
								variant="contained" 
								type={type} 
								fullWidth
							>
								{children}
							</Button>
	}
	
	return (
		<div>
			{button}
		</div>
	)
}