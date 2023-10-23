import axios from 'axios';


export class RequestHttp {
	async get() {
		var result = await axios.get('https://rickandmortyapi.com/api/character');
		if (result.status == 200) {
			return result
		} else {
			return console.error(result.status)
		}
	}
	// async post( {url}:any ,{}){

	// 	var result = await axios.post('https://rickandmortyapi.com/api/character',);
	// 	if(result.status == 200){
	// 		return result
	// 	}else{
	// 	}
	// }

}