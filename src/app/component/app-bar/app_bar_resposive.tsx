import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LogoV2Write from '../../assets/logo/logo_v2_write';
import {secondaryLg } from '../../../core/consts/colors';


function ResponsiveAppBar() {

	return (
		<AppBar style={{backgroundColor: secondaryLg}} position="static">
			<Container maxWidth="xl">
				<Toolbar style={{gap:'30px'}} >
					<LogoV2Write width="100" height="50"  />
					<h2 style={{margin:'0'}}>Sistema de consultas de la EEA</h2>
				</Toolbar>
			</Container>
		</AppBar>
	);
	}
export default ResponsiveAppBar;
