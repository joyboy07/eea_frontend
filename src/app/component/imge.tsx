import styled from 'styled-components'

function Imge({url}:any) {
	const ImgLogo = styled.div`
		background-image: url(${url});
		background-size: cover;
		width: 100%;
		height: 100%;
		background-color: #fff;
	`
	return (
		<ImgLogo/>
	)
}

export default Imge
