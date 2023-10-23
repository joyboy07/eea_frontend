import { Avatar, Menu } from '@mui/material';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import styled from 'styled-components';
import MenuFloat from './menu_float';



const MenuTop = (props:any) => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);

	const handleCloseUserMenu = (data: any) => {
		setAnchorElUser(null);
	};

	return (
		<>
			<MenuTopCon>
				<NavLeft>
					<IconsCon onClick={()=>props.onChangeStateMenu()}>
						<FaBars/>
					</IconsCon>
						<h3>The good Friend</h3>
				</NavLeft>
				<NavRight>
					<AvatarCon onClick={handleOpenUserMenu}>
						<Avatar alt="Cindy Baker" src="https://es.digitaltrends.com/wp-content/uploads/2021/07/84-nikola-tesla.jpg?p=1" />
					</AvatarCon>
				</NavRight>
			</MenuTopCon>
			<Menu
				sx={{ mt: '50px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuFloat handleCloseUserMenu={handleCloseUserMenu} ></MenuFloat>
			</Menu>
		</>
	);
};
export default MenuTop;

const MenuTopCon = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height:  6vh;
	z-index: 1039;
	background-color: #fff ;
	box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%) !important;
	display: flex;
	justify-content: space-between ;
	align-items: center ;
	padding: 0px 30px;
`;

const NavLeft = styled.div`
	display: flex;
	align-items: center ;
	gap: 10px ;
`;

const IconsCon = styled.div`
	border-radius: 50%;
	height: 2.2rem;
	width: 2.2rem;
	display: flex ;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	:hover{
		background-color: #E8E9EA;
	}
`;

const NavRight = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;

const AvatarCon = styled.div`
	background-color: #E8E9EA ;
	padding:3px ;
	border-radius: 50% ;
	cursor:pointer ;
`;
