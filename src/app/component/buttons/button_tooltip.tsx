import { IconButton, Tooltip } from '@mui/material'

export default function ButtonTooltip({ title,icon,onClick }: any) {
	return (
		<Tooltip title={title}>
			<IconButton style={{ width: '28px', height: '28px' }} onClick={onClick}>
				{icon}
			</IconButton>
		</Tooltip>
	)
}


