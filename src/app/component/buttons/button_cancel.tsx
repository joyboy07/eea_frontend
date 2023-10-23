import { Button } from '@mui/material'
import { colorSecondary } from '../../../core/consts/colors'

export default function ButtonCancel({title, onClick, width='100%'}:any) {

	const buttoStyle: any = {
		textTransform: 'none',
		backgroundColor: `${colorSecondary}`,
		color: '#fff',
		borderRadius: '6px',
		width: width
	}

	return (
		<Button onClick={onClick}  style={buttoStyle} size="small" variant="text">{title}</Button>
	)
}
