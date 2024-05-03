import { Button } from '@mantine/core';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
}

export function MyButton({ type, children, loading }: ButtonProps) {		
	return (
		<Button id='myButton' loading={loading} type={type} color='var(--purple-200)' >
			{children}
		</Button>
	)
}