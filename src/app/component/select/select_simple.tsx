import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function SelectSimple({ item, handleChangeRol, items, label }: any) {

	return (
		<FormControl fullWidth size="small" variant="outlined" >
			<InputLabel >{label}</InputLabel>
			<Select
				required
				value={item}
				onChange={handleChangeRol}
				label={label}
			>
				{
					items.map((item: any) => {
						return <MenuItem key={item.id} value={item.id}> {item.descripcion} </MenuItem>
					})
				}
			</Select>
		</FormControl>
	)
}