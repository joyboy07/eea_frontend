import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import tabI from '../../../core/Interface/tab_inteface';


export default function TabSimple({tabs}:any) {

	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	}

	return (
		<Box sx={{ width: '100%', height:'100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
				<Tabs value={value} onChange={handleChange}>
					{
						tabs.map((items:tabI) => (
							<Tab key={items.index} style={{ textTransform: 'none' }} label={items.tabLabel} {...a11yProps(items.index)} />
						))
					}
				</Tabs>
			</Box>
			{
				tabs.map((items:tabI) => (
					<TabPanel key={items.index} value={value} index={items.index }>{items.widget}</TabPanel>
				))
			}
		</Box>
	)
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			style={{height:'87%'}}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box style={ {paddingTop:'24px', height:'100%'}}>
					<div style={{height: '100%'}}>{children}</div>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
