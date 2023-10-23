import { Button } from '@mui/material';
import { colorSecondary } from '../../../core/consts/colors';

export default function ButtomIconEnd({ title, onClick, width = '100%', endIcon }: any) {
	const buttonStyle: any = {
		textTransform: 'none',
		backgroundColor: `${colorSecondary}`,
		color: '#fff',
		borderRadius: '6px',
		width: width
	}
	return (
		<Button onClick={onClick} endIcon={endIcon} style={buttonStyle} size="small" variant="text" >{title}</Button>
	)
}


