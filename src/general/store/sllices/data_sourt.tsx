import axios from "axios"
import { setUserList } from "./counter/couter_slice"

export const fecrcAll = () => async(dispatch:any) =>{
	try {
		let res = await axios.get("https://reqres.in/api/users?per_page=12")

		let xd = [
			{
				id:1,
				name: 'gata'
			}
		]
		dispatch(setUserList(xd))
	} catch (error) {
		console.log(error)
	}
}


	// export const fecrcAll = () => async(dispatch:any) =>{
	// 	try {
	// 		let res = await axios.get("https://reqres.in/api/users?per_page=12")
	// 		dispatch(setUserList(res.data.data))
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }