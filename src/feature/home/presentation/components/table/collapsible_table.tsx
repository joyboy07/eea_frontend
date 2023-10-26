import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { primaryLg } from '../../../../../core/consts/colors';

function createData(
	name: string,
	calories: string,
	fat: string,
	carbs: string,
	protein: string,
	price: string,
) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history:
		[
			{
				date: '2020-01-05',
				customerId: '11091700',
				amount: 3,
			},
			{
				date: '2020-01-02',
				customerId: 'Anonymous',
				amount: 1,
			},
		],
	};
}

function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
		<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
			<TableCell>
			<IconButton
				size="small"
				onClick={() => setOpen(!open)}
			>
				{open ? <VscChevronUp /> : <VscChevronDown />}
			</IconButton>
			</TableCell>
			<TableCell component="th" scope="row">
			{row.name}
			</TableCell>
			<TableCell align="right">{row.calories}</TableCell>
			<TableCell align="right">{row.fat}</TableCell>
			<TableCell align="right">{row.carbs}</TableCell>
			<TableCell align="right">{row.protein}</TableCell>
		</TableRow>
		<TableRow>
			<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Box>
					<div>Numero de meses Trabajados en el Año: lala</div>
					<div>Actividad economica que desarrolla la empresa en el Año:lala </div>
					<div>Principal producto que elabora y comercializa la empresa: lala </div>
					<div>Codigo de actividad economica segun el clasificador de actividades CIIU Rev. 4: lala </div>
				</Box>
			</Collapse>
			</TableCell>
		</TableRow>
		</React.Fragment>
	);
	}

	const rows = [
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112'),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112' ),
	];

	function createTitle(name: string) {
		return { name };
	}
	
		const titlesTable = [
			createTitle(''),
			createTitle('RUC'),
			createTitle('Nro Estab'),
			createTitle('Razon Social'),
			createTitle('Nro de Establecimientos'),
			createTitle('Ingresos netos Obtenidos en el Año'),
		];

	export default function CollapsibleTable() {
	return (
		<TableContainer component={Paper}>
		<Table aria-label="collapsible table">
			<TableHead style={{backgroundColor: primaryLg}}>
			<TableRow>
				{titlesTable.map((row) => (
					<TableCell style={{color:'#fff'}}>{row.name}</TableCell>
				))}
			</TableRow>
			</TableHead>
			<TableBody>
			{rows.map((row) => (
				<Row key={row.name} row={row} />
			))}
			</TableBody>
		</Table>
		</TableContainer>
	);
}