import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import es from 'date-fns/locale/es';

export default function SimpleDatePicker({ value, label = "Fecha", onChange }: any) {

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={es}>
			<DatePicker
				views={['day', 'month', 'year']}
				label={label}
				value={value}
				onChange={onChange}
				renderInput={(params: any) => <TextField size="small" {...params} helperText={null} />}
			/>
		</LocalizationProvider>
	)
}
