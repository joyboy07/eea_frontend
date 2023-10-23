import { Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colorPrimary } from '../../../core/consts/colors';
import menuI, { menuSubI } from '../../../core/Interface/menu_interface';


export default function MenuLateral({MenuCore, handleChange }:any) {
	const navigate = useNavigate()
	const [menu, setMenu] = useState('')
	const [menuSub, setMenuSub] = useState('')

	useEffect(() => {
		var getUrl = (window.location.href).split('/')
		getUrl[getUrl.length - 1] === 'dashboard' ? setMenuSub('') : setMenuSub(getUrl[getUrl.length - 1])
		setMenu('dashboard')

	}, [])

	const changeMenu = (data: menuI, subRuta:menuSubI) => {
		navigate(subRuta.ruta)
		setMenu(data.ruta!)
		setMenuSub(subRuta.ruta)
	}

	// const pushInitial = async (data: any) => {
	// 	navigate('/')
	// }

	return (
		<>
			<MenuHeading >Core</MenuHeading>
			{
				MenuCore.map((setting: menuI) => (
					<div key={setting.name}>
						<MenuAction  onClick={()=> handleChange(setting)}>
							<MenuActionLeft className={setting.ruta === menu ? 'active' : 'desactive'}>
								{setting.icono}
								<div>{setting.name}</div>
							</MenuActionLeft>
							<FaChevronRight className={setting.state ?'Rotate':'Rotatee'}/>
						</MenuAction>
						<Collapse in={setting.state}>
							<CollectionModule>
							{setting.subMenu.map((settingSub: menuSubI) => (
								<CollectionItems  className={menuSub === settingSub.ruta ? 'active' : 'desactive'} onClick={()=>changeMenu(setting,settingSub)} key={settingSub.name}>{settingSub.name}</CollectionItems>
							))}
							</CollectionModule>
						</Collapse>
					</div>

				))
			}
			<MenuHeading>Documentation</MenuHeading>
			<MenuHeading>Version</MenuHeading>
		</>
	)
}

const MenuHeading = styled.div`
	padding: 1.75rem 1rem 0.75rem;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
	color: #a7aeb8;
`;

const MenuAction = styled.a`
	display: flex;
	justify-content: space-between;
    align-items: center;
    line-height: normal;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    position: relative;
	color: #212832;
	text-decoration: none;
	/* font-weight: 600; */
	padding: 0.5rem 1rem;
	cursor: pointer;

	:hover{
		color:${colorPrimary};
	}
	.Rotate{
		transition: 0.5s ;
		transform: rotate(90deg);
	}
	.Rotatee{
		transition: 0.5s ;
		transform: rotate(0deg);
	}
	.active{
		color:${colorPrimary} ;
	}
	.desactive{
		color: #2c2c2c;
	}

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const MenuActionLeft = styled.div`
	display: flex;
	gap: 10px;

`;
const CollectionModule = styled.div`
	flex-direction: column;
    margin-left: 1.4375rem;
    border-left-style: solid;
    border-left-width: thin;
    padding-left: 0.5625rem;
	border-left-color: #d4dae3;
	.active{
		color:${colorPrimary} ;
	}
	.desactive{
		color: #2c2c2c;
	}
`;

const CollectionItems = styled.div`
	display: flex;
    align-items: center;
    line-height: normal;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    position: relative;
	color: #2c2c2c;
	font-size: 0.9375rem ;
	cursor: pointer ;
	:hover{
		color:${colorPrimary};
	}

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

`;


