import styled from "styled-components";
import { colorPrimary } from "../../core/consts/colors";
import { Column, Row } from "../../core/style/general_style_components";
import LogoDefault from './../assets/icons/logo.svg';


const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
`;
const Line = styled.div`
	background-color: #DBCDE0;
	height: 1px;
	width: 50%;
`;
const Circle = styled.div`
	border-radius: 60px;
	border: 3px solid #DBCDE0;
	height: 10px;
	width: 10px;
	margin-left: 10px;
	margin-right: 10px;
`;

function LogoDefaul() {
	return (
		<>
			<Row>
				<img src={LogoDefault} style={{ height: '50px', width: '50px' }} alt="logo" />
				<div style={{ width: '20px' }} />
				<Column>
					<h4 style={{ color: colorPrimary }} > Corte Superior de Justicia  </h4>
					<h4 style={{ color: colorPrimary }} > de Huaura </h4>
					<div style={{ height: '2px', width: '205px', background: colorPrimary }} ></div>
				</Column>
			</Row>
		</>
	)
}

export default LogoDefaul
