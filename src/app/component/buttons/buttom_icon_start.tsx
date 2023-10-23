import { Button } from '@mui/material';
import { colorSecondary } from '../../../core/consts/colors';

function ButtomIconStart({ title, onClick, width = '100%' , startIcon}: any) {
	const buttonStyle: any = {
		textTransform: 'none',
		backgroundColor: `${colorSecondary}`,
		color: '#fff',
		borderRadius: '6px',
		width: width
	}
	return (
		<Button onClick={onClick} startIcon={startIcon} style={buttonStyle} size="small" variant="text" >{title}</Button>
	)
}

export default ButtomIconStart

