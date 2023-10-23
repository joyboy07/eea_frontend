import chapterI from "../interfaces/chapter_interface";
import degreeI from "../interfaces/degree_interface";
import directoryI from "../interfaces/directory_interface";
import formtI from "../interfaces/format_interface";
import levelI from "../interfaces/level_interface";
import sectorI from "../interfaces/sector_interface";
import yearI from "../interfaces/year_interface";
import { getYears,getLevels, getDirectories, getSubDirectories, getFormats, getChapters, getlevelDetails, getCategories, getSubCategories } from "../presentation/slices/home_slice";

export const getYearsSouce = () => async(dispatch:any) =>{
	try {
		let items: yearI[] = [
			{
				id:2019,
			},
			{
				id:2020,
			},
		]
		dispatch(getYears(items))
	} catch (error) {}
}

export const getLevelsSource = () => async(dispatch:any) =>{
	try {
		let items: levelI[] = [
			{
				id:1,
				nombre:'Empresa',
			},
			{
				id:2,
				nombre:'Establecimiento',
			},
			{
				id:3,
				nombre:'Compatibilizacion',
			},
			{
				id:4,
				nombre:'Comunes 2018 -2017',
			}
		]
		dispatch(getLevels(items))
	} catch (error) {}
}

export const getDirectorySource = (idNivel: number ) => async(dispatch:any) =>{
	try {
		let items: directoryI[] = [
			{
				id:1,
				name:'Sectores',
			},
			{
				id:2,
				name:'Sistemas Intermedios',
			},
			{
				id:3,
				name:'Directorios',
			}
		]

		let newItems: directoryI[] = []
		if(idNivel == 1){
			newItems = items
		}else if(idNivel == 2){
			newItems = items
		}else if(idNivel == 3){
			newItems.push(items[1])
		}else if(idNivel == 4){
			newItems.push(items[2])
		}
		dispatch(getDirectories(newItems))
	} catch (error) {}
}

export const getSubDirectoriesSource = (idDirectorio: number) => async(dispatch:any) =>{

	try {
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
