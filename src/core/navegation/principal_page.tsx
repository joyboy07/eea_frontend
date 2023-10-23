import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MenuLeft from "./menu/menu_left";
import MenuTop from "./menu/menu_top";

const PrincipalPage = () => {

	const [loading, setLoadingButton] = useState(true)

	const onChangeStateMenu =  () => {
		setLoadingButton((prev) => !prev)
	};

	return (
		<PrincipalCont>
			<MenuTop onChangeStateMenu={onChangeStateMenu} />
			<RouterCon >
				<RouterLeft className={loading ?'active':'desc'}>
					<MenuLeft/>
				</RouterLeft>
				<RouterRight className={loading ?'activer':'descr'}><Outlet /></RouterRight>
			</RouterCon>
		</PrincipalCont>
	)
}
export default PrincipalPage

const PrincipalCont = styled.div`
	.activea{
		display: block ;
		animation-duration: 0.5s;
		animation-name: fadeInUp;
	}
	.desca{
		display: none;

	}
	@keyframes fadeInUp{
		0%{
			opacity: 0;
			margin-top: 0.75rem;
		}
		100%{
			opacity: 1;
			margin-top: 0;
		}
	}
`;

const RouterCon = styled.div`
	height: 100vh ;
	display: flex;
	.active{
		background-color: #fff;
		transition: 1s ease ;
	}
	.desc{
		transition: 1s ease ;
		transform: translateX(-300px) ;
	}
	.activer{
		transition: 1s ease ;
		right:0 ;
	}
	.descr{
		right:0 ;
		transition: 1s ease ;
		width: 100%;
	}

`;

const RouterLeft = styled.div`
	position: fixed ;
	padding-top: 3.625rem;
	width: 14%;
	box-shadow: 0.15rem 0 1.75rem 0 rgb(33 40 50 / 15%) !important;
	height: 100%;
	z-index: 1038;
`;

const RouterRight = styled.div`
	position: absolute ;
	background-color: #F2F6FC ;
	width: 86%;
	height: 94vh;
	padding-top: 6vh;
`;



