import axios from "axios";
import API from "../../../core/consts/const";
import chapterI from "../interfaces/chapter_interface";
import degreeI from "../interfaces/degree_interface";
import { getYears, getFormats, getChapters, getlevelDetails, getCategories, getSubCategories, getModules, getlevels, getSectores, getClasifications } from "../presentation/slices/home_slice";

export const getYearsSouce = () => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`year`)
		dispatch(getYears(res.data))
	} catch (error) {}
}

export const getModulesSource = () => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`module`)
		dispatch(getModules(res.data))
	} catch (error) {}
}

export const getLevelsSource = (idNivel: number ) => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`module-nivel/${idNivel}`)
		dispatch(getlevels(res.data))
	} catch (error) {}
}

export const getSectoresSource = (idNivel: number, ) => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`sector-nivel/${idNivel}`)
		dispatch(getSectores(res.data))
	} catch (error) {}
}

export const getClasificationsSource = ( ) => async(dispatch:any) =>{

	try {
		let desgrees: degreeI[] = [
			{
				id:1,
				name:'grandes',
			},
			{
				id:2,
				name:'Medianas',
			},
			{
				id:3,
				name:'Multisectores',
			}
		]
		dispatch(getClasifications(desgrees))
	} catch (error) {}
}


export const getFormatsSource = (idSector:number) => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`sector-formato/${idSector}`)
		dispatch(getFormats(res.data))
	} catch (error) {}

}

export const getChaptersSource = (idNivel:number , idSector:String, idFormato:string) => async(dispatch:any) =>{

	let idSectorFormate
	let cant = String(idSector).length
	if( cant == 1 ){
		idSectorFormate = '00'+idSector
	}else if( cant == 2 ){
		idSectorFormate = '0'+idSector
	}else {
		idSectorFormate = idSector
	}

	try {
		let res = await axios.get( API.URL+`chapter?idNivel=${idNivel}&idSector=${idSectorFormate}&formato=${idFormato}`)
		console.log(res.data)
		dispatch(getChapters(res.data))
	} catch (error) {}
}

export const getLevelDetailSource = () => async(dispatch:any) =>{
	try {
		let items: chapterI[] = [
			{
				id:1,
				name:'por empresa',
			},
			{
				id:2,
				name:'agrupasion',
			},
		]
		dispatch(getlevelDetails(items))
	} catch (error) {}
}

export const getCategoriesSource = () => async(dispatch:any) =>{
	try {
		let items: chapterI[] = [
			{
				id:1,
				name:'Nivel 104',
			},
			{
				id:2,
				name:'Nivel 54',
			},
			{
				id:3,
				name:'Nivel 14',
			},
			{
				id:4,
				name:'Sector Ins.',
			},
		]
		dispatch(getCategories(items))
	} catch (error) {}
}

export const getSubCategoriesSource = () => async(dispatch:any) =>{
	try {
		let items: chapterI[] = [
			{
				id:1,
				name:'0010',
			},
			{
				id:2,
				name:'0545',
			},
		]
		dispatch(getSubCategories(items))
	} catch (error) {}
}
