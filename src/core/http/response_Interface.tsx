interface IResponse {
	data?: any,
	errors?: IerrorsResponse
	http?: IhttpResponse,
}

interface IdataResponse {
	rol: string,
	token: string,
	usuario?: string,
}

interface IerrorsResponse {
	code: number,
	message?: string,
}

interface IhttpResponse {
	message: string,
	status_code?: number,
}
export default IResponse