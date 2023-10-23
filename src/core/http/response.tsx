interface ResponseHttp{
	success: success;
	errors: errors[];
	data: any;
}

export default ResponseHttp

interface success{
	status_code:number;
	message: string;
}

interface  errors{
	code:number;
	message: string;
}