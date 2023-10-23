import { Button } from '@mui/material'
import { colorSecondary } from '../../../core/consts/colors'

export default function ButtoSecondary({ onClick, title, width = '100%' }: any) {

	const buttonStyle: any = {
		textTransform: 'none',
		backgroundColor: `${colorSecondary}`,
		color: '#fff',
		borderRadius: '6px',
		width: width
	}
	return (
		<Button onClick={onClick} style={buttonStyle} size="small" variant="text">{title}</Button>
	)
}



