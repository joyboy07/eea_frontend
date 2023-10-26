import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LogoIneiWrite from '../../assets/logo/logo_v1_white';
import LogoV2Write from '../../assets/logo/logo_v2_write';


function ResponsiveAppBar() {

	return (
		<AppBar style={{backgroundColor:'#3b4e87'}} position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
				<LogoV2Write width="100" height="50"  />
				</Toolbar>
			</Container>
		</AppBar>
	);
	}
export default ResponsiveAppBar;
