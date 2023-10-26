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

function createData(
	name: string,
	calories: string,
	fat: string,
	carbs: string,
	protein: string,
	price: string,
	y: string,
	x: string,
	z: string,
) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		y,
		x,
		z,
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
				aria-label="expand row"
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
			<TableCell align="right">{row.x}</TableCell>
			<TableCell align="right">{row.y}</TableCell>
			<TableCell align="right">{row.z}</TableCell>
		</TableRow>
		<TableRow>
			<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Box>

				</Box>
			</Collapse>
			</TableCell>
		</TableRow>
		</React.Fragment>
	);
	}

	const rows = [
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112', 'AGROINDUSTRIA', 'NO', 'ga'),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112', 'AGROINDUSTRIA', 'NO', 'ga' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112', 'AGROINDUSTRIA', 'NO', 'ga' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112', 'AGROINDUSTRIA', 'NO', 'ga' ),
	createData('20100227542', 'PROCESOS AGROINDUSTRIALES SA', '000', '001001', '0121'	, 'S112', 'AGROINDUSTRIA', 'NO', 'ga' ),
	];

	export default function CollapsibleTable() {
	return (
		<TableContainer component={Paper}>
		<Table aria-label="collapsible table">
			<TableHead>
			<TableRow>
				<TableCell />
				<TableCell>Ruc</TableCell>
				<TableCell align="right">RozSocial</TableCell>
				<TableCell align="right">Nro establec</TableCell>
				<TableCell align="right">Ae eretes</TableCell>
				<TableCell align="right">CIIU_DNCN</TableCell>
				<TableCell align="right">SI_DNCN</TableCell>
				<TableCell align="right">Sector Economico</TableCell>
				<TableCell align="right">clave</TableCell>
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