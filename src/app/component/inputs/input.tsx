import { TextField } from '@mui/material'

function Input({ disabled = false, label, onKeyUp, errors, register, required = 'Campo requerido', pattern, maxLength }: any) {
	var labelFactory: string = label
	return (
		<div style={{ width: '100%' }}>
			<TextField
				disabled={disabled}
				style={{ borderRadius: '5px' }}
				inputProps={{ maxLength: maxLength, }}
				type='text'
				label={labelFactory}
				multiline
				variant="outlined"
				{...register(labelFactory.toLowerCase().replace(/\s+/g, ''), { required: required, pattern: pattern })}
				size="small"
				onKeyUp={onKeyUp}
				fullWidth
			/>
			{errors && (
				<small style={{ color: '#E74C3C', paddingLeft: '10px', width: 'auto' }}>{errors.message}</small>
			)}
		</div>
	)

}

export default Input




