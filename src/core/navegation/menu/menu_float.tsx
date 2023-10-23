
import { Avatar, Divider } from "@mui/material";
import { VscAccount, VscSignOut } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colorPrimary } from "../../consts/colors";

const MenuFloat = ({onChangeStateMenuFloat, onChangeStateMenu}:any) => {

	const navigate = useNavigate()

	const onNavegate =  (ruta:string) => {
		onChangeStateMenuFloat()
		onChangeStateMenu()
		navigate(ruta)
	};

	return(
		<>
			<FloatAvatar>
				<Avatar alt="Cindy Baker" src="https://es.digitaltrends.com/wp-content/uploads/2021/07/84-nikola-tesla.jpg?p=1" />
				<div>
					<div>Nicola Tesla</div>
					<div>ntesla@gmail.com</div>
				</div>
			</FloatAvatar>
			<Divider style={{marginTop:'8px', marginBottom:'8px'}}/>
			<FloatItems>
			<FloatItem onClick={() => onChangeStateMenu('Mi Perfil')}>
				<VscAccount />
				<div>Cuenta</div>
			</FloatItem>
			<FloatItem onClick={() => onChangeStateMenu('Cerrar Session')}>
				<VscSignOut />
				<div>Cerrar sesion</div>
			</FloatItem>

			</FloatItems>
		</>
	)

}

export default MenuFloat

const FloatAvatar = styled.div`
	display: flex;
	gap: 15px;
	padding: 0 1rem ;
	div{
		div{
			:nth-child(1){
				font-size: 0.9rem;
				text-overflow: ellipsis;
			}
			:nth-child(2){
				color: #69707a;
				font-size: 0.75rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
`;

const FloatItems = styled.div`
	display: flex;
	flex-direction: column ;
`;

const FloatItem = styled.div`
	display: flex;
	font-size: 13px ;
	align-items: center ;
	gap:8px;
	padding: 0.25rem 1rem;
	cursor: pointer;
	:hover{
		color:  ${colorPrimary};
	}
`;
