import styled from "styled-components";
import { Row } from "../../core/style/general_style_components";
import LogoDefault from './../assets/icons/logo.svg';

function LogoSimple() {
	return (
		<>
			<Row>
				<img src={LogoDefault} style={{ height: '50px', width: '50px' }} alt="logo" />
			</Row>
		</>
	)
}

export default LogoSimple
