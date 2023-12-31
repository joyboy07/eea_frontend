import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { primaryLg } from '../../../core/consts/colors';

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
	x: number,
) {
	return { name, calories, fat, carbs, protein,x };
}
function createTitle(name: string) {
	return { name };
}

	const titlesTable = [
		createTitle('RUC'),
		createTitle('Nro Estab'),
		createTitle('Razon Social'),
		createTitle('Nro de Establecimientos'),
		createTitle('Ingresos netos Obtenidos en el Año'),
		createTitle('Numero de meses Trabajados en el Año'),
	];

	const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.0),
	createData('Eclair', 262, 16.0, 24, 6.0, 4.0),
	createData('Cupcake', 305, 3.7, 67, 4.3, 4.0),
	createData('Gingerbread', 356, 16.0, 49, 3.9, 4.0),
	createData('Gingerbd', 356, 16.0, 49, 3.9, 4.0),
	createData('Ginread', 356, 16.0, 49, 3.9, 4.0),
	createData('Ggerbread', 356, 16.0, 49, 3.9, 4.0),
	createData('Gierbread', 356, 16.0, 49, 3.9, 4.0),
	createData('Gingread', 356, 16.0, 49, 3.9, 4.0),
	createData('Ginghhhbread', 356, 16.0, 49, 3.9, 4.0),
	createData('Gingerbread', 356, 16.0, 49, 3.9, 4.0),
	];

	export default function BasicTable() {
	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
		<TableContainer >
		<Table style={{overflow: 'auto'}} >
			<TableHead style={{backgroundColor: primaryLg}} >
			<TableRow>
				{titlesTable.map((row) => (
					<TableCell style={{color:'#fff'}}>{row.name}</TableCell>
				))}
			</TableRow>
			</TableHead>
			<TableBody>
			{rows.map((row) => (
				<TableRow
				key={row.name}
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.calories}</TableCell>
				<TableCell align="right">{row.fat}</TableCell>
				<TableCell align="right">{row.carbs}</TableCell>
				<TableCell align="right">{row.protein}</TableCell>
				<TableCell align="right">{row.x}</TableCell>
				</TableRow>
			))}
			</TableBody>
		</Table>
		</TableContainer>
		</Paper>
	);
}