import { Button } from '@mui/material'
import { colorPrimary } from '../../../core/consts/colors'

export default function ButtoPrimary({ title, width = '100%' }: any) {

	const buttoStyle: any = {
		textTransform: 'none',
		backgroundColor: `${colorPrimary}`,
		color: '#fff',
		borderRadius: '6px',
		width: width
	}
	return (
		<Button type='submit' style={buttoStyle} size="small" variant="text">{title}</Button>
	)
}


