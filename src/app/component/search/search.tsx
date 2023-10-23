import { FaRegTimesCircle, FaSearch } from "react-icons/fa";
import styled from 'styled-components';


export default function SearchSimple({onClena, onChange ,register,Clean }:any) {

	return (
		<Container >
			<Search>
				<input
					required
					type="text"
					maxLength={100}
					placeholder='Búsqueda'
					{...register("search")}
					onChange={onChange}
				>
				</input>
			</Search>
			<button type="submit"><FaSearch/></button>
			{
				Clean ? <button onClick={() => onClena()}> <FaRegTimesCircle/> </button> : null
			}
		</Container>
	)
}
const Container = styled.div`
	display: flex ;
	border: 0.5px solid #ccc;
	border-radius: 40px;

`;

const Search = styled.div`
	border-radius: 40px;
	padding: 10px 8px 10px 15px;
	input{
		width: 250px ;
		border: none;
		outline: none;
		padding: 0;
		background: none;
		font-size: 1rem ;
		transition: 0.5s ease;
		color: #000 ;
		animation: changeWith 1s linear;
	}
	@keyframes changeWith {
		from {
			width: 0px;
		}
		to {
			width: 250px;
		}
	}
`;


