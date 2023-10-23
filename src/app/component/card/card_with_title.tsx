import styled from 'styled-components';


export default function CardWithTitle({title, widget }:any) {

	return (
		<UserEnableCont>
			<UserEnableTitle>
				<div>{title}</div>
			</UserEnableTitle>
			<UserEnableBody>{widget}</UserEnableBody>
		</UserEnableCont>
	)
}

const UserEnableCont = styled.div`
	width: 100% ;
	box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%) !important;
	border-radius: 0.35rem;
	background-color: #fff;
	height: 100%;
	overflow: hidden;
`;

const UserEnableTitle = styled.div`
	border-bottom: 1px solid rgba(33, 40, 50, 0.125);
	background-color: rgba(33, 40, 50, 0.03);
	padding: 1rem 1.35rem;
	display: flex;
	justify-content:space-between;
	align-items: center;
`;

const UserEnableBody = styled.div`
	padding: 21.1px ;
	height: 87% ;
`;
