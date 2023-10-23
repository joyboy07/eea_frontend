import axios from "axios";
import API from "../../core/consts/const";
import { getToken } from "../../core/utils/auth_helpers";

export function getMaterialApi() {
	return axios.get(
		API.URL + `material`,
		{
			headers: { Authorization: 'Bearer ' + getToken(), },
		}
	)
}

export function getTypeApi() {
	return axios.get(
		API.URL + `type`,
		{
			headers: { Authorization: 'Bearer ' + getToken(), },
		}
	)
}

export function getFunctionApi() {
	return axios.get(
		API.URL + `function`,
		{
			headers: { Authorization: 'Bearer ' + getToken(), },
		}
	)
}

