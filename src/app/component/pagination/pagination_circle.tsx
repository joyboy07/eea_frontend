import { Pagination } from '@mui/material';
import styled from 'styled-components';


export default function PaginationCircle({count,page, onChange }:any) {

	return (
		<PaginationCircleCon>
				<Pagination
					count={count}
					page={page}
					onChange={onChange}
					color="primary"
					// renderItem={(item) => (
					// 	<PaginationItem
					// 		style={{background:'#ccc'}}
					// 		{...item}
					// 	/>
					// )}
				/>
		</PaginationCircleCon>
	)
}

const PaginationCircleCon = styled.div`
	display: flex ;
	margin:10px 0px ;
	justify-content: center ;
`;

