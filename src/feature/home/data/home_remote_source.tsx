import axios from "axios";
import API from "../../../core/consts/const";
import chapterI from "../interfaces/chapter_interface";
import degreeI from "../interfaces/degree_interface";
import directoryI from "../interfaces/directory_interface";
import formtI from "../interfaces/format_interface";
import sectorI from "../interfaces/sector_interface";
import { getYears, getDirectories, getSubDirectories, getFormats, getChapters, getlevelDetails, getCategories, getSubCategories, getModules } from "../presentation/slices/home_slice";

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

export const getDirectorySource = (idNivel: number ) => async(dispatch:any) =>{
	try {
		let res = await axios.get( API.URL+`module-nivel/${idNivel}`)
		dispatch(getDirectories(res.data))
	} catch (error) {}
}

export const getSubDirectoriesSource = (idDirectorio: number, ) => async(dispatch:any) =>{

	try {
		let res = await axios.get( API.URL+`sector-nivel/${1}`)
		let sector: sectorI[] = [
			{
				id:1,
				name:'Agencias de viaje',
			},
			{
				id:3,
				name:'Educación privada',
			},
			{
				id:4,
				name:'Comercio',
			},
			{
				id:5,
				name:'Construcción',
			},
			{
				id:7,
				name:'Establecimientos de hospedaje',
			},
			{
				id:8,
				name:'Hidrocarburos',
			},
		]
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
		let newItems: directoryI[] = []
		if(idDirectorio == 1){
			newItems = sector
		}else if(idDirectorio == 2){
			newItems = desgrees
		}else if(idDirectorio == 3){
			newItems = []
		}
		dispatch(getSubDirectories(newItems))
	} catch (error) {}
}


export const getFormatsSource = () => async(dispatch:any) =>{
	try {
		let items: formtI[] = [
			{
				id:1,
				name:'A',
			},
			{
				id:2,
				name:'M',
			},
			{
				id:3,
				name:'F2',
			},
			{
				id:4,
				name:'D',
			},
		]
		dispatch(getFormats(items))
	} catch (error) {}
}

export const getChaptersSource = () => async(dispatch:any) =>{
	try {
		let items: chapterI[] = [
			{
				id:1,
				name:'Inicio',
			},
			{
				id:2,
				name:'Capitulo 1',
			},
			{
				id:3,
				name:'Capitulo 2',
			},
			{
				id:4,
				name:'Capitulo 3',
			},
		]
		dispatch(getChapters(items))
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
