import styled from "styled-components";
import { colorGrey, primaryColor, colorWhite } from "../consts/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	height: 95%;
`;

export const FormHead = styled.form`
	margin-bottom: 8px;
	display: flex;
	align-items: center ;
	justify-content: space-between;
	gap:10px;
	button{
		width: 40px;
		height: 40px;
		background: ${colorWhite};
		padding: 7px 7px ;
		border-radius: 50% ;
		color: ${primaryColor};
		border: 0px;
		cursor: pointer;
		:hover{
			background-color: ${primaryColor} ;
			color: ${colorWhite};
		}
	}
`;

export const PheadInfo = styled.p`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 12px;
	color: #9b9b9b;
`
export const PBodyInfo = styled.p`
	padding-bottom: 15px;
`
export const ButtonClose = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const NoticeError = styled.p`
	color: red;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 12px;
	font-style: italic;
	text-align: center;
`

export const ModalError = styled.div`
	display:flex ;
	background-color: #160B0B;
	margin: 10px 0px ;
	color: #DC3C30;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 12px;
	font-style: italic;
	padding: 10px;
	gap: 10px;
	border-radius: 5px;
	div{
		color: #DCB3B3;
	}
`

export const ContainerAll = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`;

export const ButtonLogin: any = {
	background: primaryColor,
	height: '30px'
}

export const ContainerModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40%;
`;

export const ContainerModalBlur = styled.div`
	background: rgba(0,0,0,0.2);
	backdrop-filter:blur(5px);
	border:solid 1px rgba(0,0,0,0.2);
	box-shadow: 0 10px 20px 5px rgba(0,0,0,0.05);
	border-radius:5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	/* background-color: red; */
	/* border-radius: 5px; */
	padding: 15px 40px;
`;

export const DeleteCon = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 15px ;
	div{
		display: flex;
		gap:10px;
	}
`;

export const MarginTopBottom = styled.div`
	margin-top: 10px ;
	margin-bottom: 10px;
`;

export const RowForm = styled.div`
	display: flex;
	gap: 15px;
`;

export const ColumForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-bottom: 15px ;
`;

export const Row = styled.div`
	display: flex;
`;

export const RowEnd = styled.div`
	display: flex;
	justify-content: space-between;
	align-items:center ;
	gap:15px
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ButtonIcon = styled.div`
	background-color:${primaryColor} ;
	color: ${colorWhite} ;
	margin: 10px 0px;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	border-radius: 5px ;
	gap: 10px ;
	cursor: pointer ;
	:active{
		transform:  scale(.9);
	}
	:hover{
		
	}

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const ButtonIconEnable = styled.div`
	padding: 10px 15px;
	border-radius: 5px ;
	text-align: center;
	cursor: pointer ;
	:active{
		transform:  scale(.9);
	}
	:hover{
	}
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const iconbuttonStyle: any = {
	marginRight: '10px',
	marginLeft: '10px'
}

export const ActionButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between ;
`;

export const Notice = styled.p`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 12px;
	font-style: italic;
	/* text-align: center; */
	span{
		font-weight:bold ;
	}
`

export const buttonCancelStyle: any = {
	textTransform: 'none',
	backgroundColor: colorGrey,
	color: colorWhite,
	borderRadius: '6px',
	width: '45%',
}

export const buttonPrimaryStyle: any = {
	textTransform: 'none',
	backgroundColor: primaryColor,
	color: colorWhite,
	borderRadius: '6px',
	width: '100%'
}

export const buttonPrimaryIconStyle: any = {
	textTransform: 'none',
	backgroundColor: primaryColor,
	color: colorWhite,
	borderRadius: '6px',
	width: '130px'
}