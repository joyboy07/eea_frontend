interface menuI {
	name: string
	ruta?: string
	icono?: any
	onclick?: any
	state?: any
	subMenu:menuSubI[]
}

export default menuI


export interface menuSubI {
	name: string
	ruta: string
}