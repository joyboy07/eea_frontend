import { Slide, SlideProps, Snackbar } from '@mui/material';
import { ComponentType, useState } from 'react';

export type TransitionProps = Omit<SlideProps, 'direction'>;

export function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction="left" />;
}


export default function SnackbarLeft({widget}:any) {
	const [message, setMessage] = useState('');

	const [open, setOpen] = useState(false);

	const [transition, setTransition] = useState<ComponentType<TransitionProps> | undefined>(undefined);

	const handleClick = (Transition: ComponentType<TransitionProps>) => {
		setTransition(() => Transition);
		setOpen(true);
	};

	const onSnackbar = (data: any) => {
		setMessage(data)
		handleClick(TransitionLeft)
	};


	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{widget}
			<Snackbar
				open={open}
				onClose={handleClose}
				TransitionComponent={transition}
				message={message}
				key={transition ? transition.name : ''}
			/>
		</>
	)
}
