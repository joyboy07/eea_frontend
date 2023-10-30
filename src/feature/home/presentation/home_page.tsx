import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCategoriesSource, getChaptersSource, getDirectorySource, getFormatsSource, getLevelDetailSource, getLevelsSource, getSubCategoriesSource, getSubDirectoriesSource, getYearsSouce } from '../data/home_remote_source';
import yearI from '../interfaces/year_interface';
import levelI from '../interfaces/level_interface';
import directoryI from '../interfaces/directory_interface';
import chapterI from '../interfaces/chapter_interface';
import { Column, Row } from '../../../core/style/general_style_components';
import ResponsiveAppBar from '../../../app/component/app-bar/app_bar_resposive';
import IconExcel from '../../../app/assets/icons/icon_excel';
import CollapsibleTable from './components/table/collapsible_table';

const HomePage = () => {

	const dispatch:any = useDispatch()
	const [year, setYear] = useState('');
	const [level, setLevels] = useState('');
	const [directory, setDirectory] = useState('');
	const [subDirectory, setSubDirectory] = useState('');
	const [format, setFormat] = useState('');
	const [chapter, setChapter] = useState('');

	const [levelDetail, setLevelDetail] = useState('');
	const [category, setCategory] = useState('');
	const [subCategory, setSubCategory] = useState('');

	const [showTableFilter, setShowTableFilter] = useState(false);
	const [showSelectSubDirection, setShowSelectSubDirection] = useState(false);
	const [showTwoSeletor, setShowTwoSeletor] = useState(false);

	const {years} = useSelector((state: any) => state.home )
	const {levels} = useSelector((state: any) => state.home )
	const {directories} = useSelector((state: any) => state.home )
	const {subDirectories} = useSelector((state: any) => state.home )
	const {formats} = useSelector((state: any) => state.home )
	const {chapters} = useSelector((state: any) => state.home )

	const {levelDetails} = useSelector((state: any) => state.home )
	const {categories} = useSelector((state: any) => state.home )
	const {subCategories} = useSelector((state: any) => state.home )

	useEffect(() => {
		dispatch(getYearsSouce())
		setYear('2019')
		dispatch(getLevelsSource())
		dispatch(getFormatsSource())
		dispatch(getChaptersSource())
		dispatch(getLevelDetailSource())
		dispatch(getCategoriesSource())
		dispatch(getSubCategoriesSource())
	}, [])

	const handleChangeYear = (event: SelectChangeEvent) => {
		setYear(event.target.value as string);
	};
	const handleChangeModule = (event: SelectChangeEvent) => {
		setDirectory('')
		dispatch(getDirectorySource(parseInt(event.target.value)))
		setLevels(event.target.value as string);
		setShowTableFilter(false)
		setShowSelectSubDirection(false)
		setShowTwoSeletor(false)
	};

	const handleChangeSubModule = (event: SelectChangeEvent) => {
		setShowSelectSubDirection(false)
		setShowTwoSeletor(false)
		setSubDirectory('')

		if(
			(level == '1' && event.target.value == '3')||
			(level == '2' && event.target.value == '3') ||
			(level == '4' || level == '3' || level == '2' && event.target.value == '2')
		){
			setDirectory(event.target.value as string);
			setShowTableFilter(true)
			//! Cargar la data de la tabla con los que se a realizado la seleccion
			console.log('Entre')
			return
		}
		setShowTableFilter(false)
		setShowSelectSubDirection(true)

		if(event.target.value == '1'){
			setShowTwoSeletor(true)
		}else {
			setShowTwoSeletor(false)
		}
		dispatch(getSubDirectoriesSource(parseInt(event.target.value)))
		setDirectory(event.target.value as string);
	};

	const handleChangeSubDirectories = (event: SelectChangeEvent) => {
		console.log(directory)
		if(directory == '2' ){
			setShowTableFilter(true)
			setSubDirectory(event.target.value as string);
			return
		}
		setSubDirectory(event.target.value as string);
	};
	const handleChangeFormat = (event: SelectChangeEvent) => {
		setFormat(event.target.value as string);
	};

	const handleChangeChapter = (event: SelectChangeEvent) => {
		setChapter(event.target.value as string);
		setShowTableFilter(true)
	};

	const handleChangeLevelDetial = (event: SelectChangeEvent) => {
		setLevelDetail(event.target.value as string);
	};

	const handleChangeCategory = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
	};

	const handleChangeSubCategory = (event: SelectChangeEvent) => {
		setSubCategory(event.target.value as string);
	};

	return (
		<Container>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Column style={{gap:'20px', marginTop:'20px', width:'95%'}}>
				<ContFilter>
					<Row style={{gap:'10px'}}>
						<FormControl size="small" fullWidth>
							<InputLabel >Seleccione el año</InputLabel>
							<Select
								value={year}
								label="Seleccione la nivel"
								onChange={handleChangeYear}
							>
								{
									years.map((row: yearI) => (
										<MenuItem key={row.id} value={row.id}>{row.id}</MenuItem>
									))
								}
							</Select>
						</FormControl>
						<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la modulo</InputLabel>
								<Select
									disabled = { year == ''}
									value={level}
									label="Seleccione la modulo"
									onChange={handleChangeModule}
								>
									{
										levels.map((row: levelI) => (
											<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
									))}
								</Select>
							</FormControl>
						<FormControl size="small" fullWidth>
							<InputLabel >Seleccione el sub modulo</InputLabel>
							<Select
								disabled = { level == ''}
								value={directory}
								label="Seleccione el sub modulo"
								onChange={handleChangeSubModule}
							>
								{
									directories.map((row: directoryI) => (
										<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Row>
					<Row style={{gap:'10px'}}>
						{
							showSelectSubDirection?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la sub directorio</InputLabel>
								<Select
									disabled = { directory == ''}
									value={subDirectory}
									label="Seleccione la sub directorio"
									onChange={handleChangeSubDirectories}
								>
									{
										subDirectories.map((row: any) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							:null
						}
						{
							showTwoSeletor?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la Formato </InputLabel>
								<Select
									disabled = { subDirectory == ''}
									value={format}
									label="Seleccione la Formato"
									onChange={handleChangeFormat}
								>
									{
										formats.map((row: any) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							: null
						}
						{
							showTwoSeletor?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la Capitulos </InputLabel>
								<Select
									disabled = { format == ''}
									value={chapter}
									label="Seleccione la Capitulo"
									onChange={handleChangeChapter}
								>
									{
										chapters.map((row: chapterI) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							: null
						}
					</Row>
				</ContFilter>
				{
					showTableFilter ?
					<ContResult>
						<Row style={{gap:'10px'}}>
							<FormControl size="small" fullWidth>
								<InputLabel >Detalles nivel </InputLabel>
								<Select
									value={levelDetail}
									label="Detalles nivel"
									onChange={handleChangeLevelDetial}
								>
									{
										levelDetails.map((row: chapterI) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl size="small" fullWidth>
								<InputLabel >Nivel</InputLabel>
								<Select
									value={category}
									label="Nivel"
									onChange={handleChangeCategory}
								>
									{
										categories.map((row: chapterI) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl size="small" fullWidth >
								<InputLabel >Sub niveles </InputLabel>
								<Select
									value={subCategory}
									label="Sub niveles"
									onChange={handleChangeSubCategory}
								>
									{
										subCategories.map((row: chapterI) => (
											<MenuItem key={row.id} value={row.id}>{row.name}</MenuItem>
									))}
								</Select>
							</FormControl>
							<div style={{width:'100px', marginLeft:'10px', display:'flex', alignItems:'center' }} >
								<IconExcel ></IconExcel>
							</div>
						</Row>
						{/* <BasicTable/> */}
						<CollapsibleTable/>
					</ContResult>
					: <div></div>
				}
			</Column>
		</Container>
	)
}
export default HomePage

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ContFilter = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 10px;
	padding: 30px;
	box-shadow: 0px 3px 6px #00000015;
`;

const ContResult = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 10px;
	padding: 30px;
	box-shadow: 0px 3px 6px #00000015;
	animation:scale-up-center 0.4s; } @keyframes scale-up-center{ 0%{transform:scale(.5)} 100%{transform:scale(1)}
`;