import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCategoriesSource, getChaptersSource, getFormatsSource, getLevelDetailSource, getLevelsSource, getModulesSource, getSectoresSource, getSubCategoriesSource, getYearsSouce } from '../data/home_remote_source';
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
	const [module, setModules] = useState('');
	const [level, setLevel] = useState('');
	const [sector, setSector] = useState('');
	const [clasification, setClasification] = useState('');
	const [format, setFormat] = useState('');
	const [chapter, setChapter] = useState('');

	const [levelDetail, setLevelDetail] = useState('');
	const [category, setCategory] = useState('');
	const [subCategory, setSubCategory] = useState('');

	const [showTableFilter, setShowTableFilter] = useState(false);
	const [showSector, setShowSector] = useState(false);
	const [showClasification, setShowClasification] = useState(false);
	const [showFormato, setShowFormato] = useState(false);
	const [showChapter, setShowChapter] = useState(false);


	const {years} = useSelector((state: any) => state.home )
	const {modules} = useSelector((state: any) => state.home )
	const {levels} = useSelector((state: any) => state.home )
	const {sectores} = useSelector((state: any) => state.home )
	const {clasifications} = useSelector((state: any) => state.home )
	const {formats} = useSelector((state: any) => state.home )
	const {chapters} = useSelector((state: any) => state.home )

	const {levelDetails} = useSelector((state: any) => state.home )
	const {categories} = useSelector((state: any) => state.home )
	const {subCategories} = useSelector((state: any) => state.home )

	useEffect(() => {
		dispatch(getYearsSouce())
		setYear('2019')
		dispatch(getModulesSource())

		
		dispatch(getLevelDetailSource())
		dispatch(getCategoriesSource())
		dispatch(getSubCategoriesSource())
	}, [])

	const handleChangeYear = (event: SelectChangeEvent) => {
		setYear(event.target.value as string);
	};
	const handleChangeModule = (event: SelectChangeEvent) => {
		setLevel('')
		dispatch(getLevelsSource(parseInt(event.target.value)))
		setModules(event.target.value as string);
		setShowSector(false)
		setShowTableFilter(false)
		setShowClasification(false)
		setShowFormato(false)
	};

	const handleChangeLevel = (event: SelectChangeEvent) => {
		if(module == '1'){
			setShowSector(true)
		}else if(module == '2' && event.target.value == '1'){
			setShowClasification(true)
		}
		dispatch(getSectoresSource( parseInt(event.target.value)))
		setLevel(event.target.value as string);
	};

	const handleChangeSector = (event: SelectChangeEvent) => {
		setSector(event.target.value as string)
		dispatch(getFormatsSource(parseInt(event.target.value)))
		setShowFormato(true)

	};

	const handleChangeClasification = (event: SelectChangeEvent) => {
		setClasification(event.target.value as string)
	};

	const handleChangeFormat = (event: SelectChangeEvent) => {
		dispatch(getChaptersSource( parseInt(level),sector, event.target.value  ))
		setShowChapter(true)
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
								label="Seleccione el año"
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
									value={module}
									label="Seleccione la modulo"
									onChange={handleChangeModule}
								>
									{
										modules.map((row: levelI) => (
											<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
									))}
								</Select>
							</FormControl>
						<FormControl size="small" fullWidth>
							<InputLabel >Seleccione el nivel</InputLabel>
							<Select
								disabled = { module == ''}
								value={level}
								label="Seleccione el nivel"
								onChange={handleChangeLevel}
							>
								{
									levels.map((row: directoryI) => (
										<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
								))}
							</Select>
						</FormControl>
					</Row>
					<Row style={{gap:'10px'}}>
						{
							showSector?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione el sector </InputLabel>
								<Select
									disabled = { level == ''}
									value={sector}
									label="Seleccione la sub directorio"
									onChange={handleChangeSector}
								>
									{
										sectores.map((row: any) => (
											<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
									))}
								</Select>
							</FormControl>
							:null
						}
						{
							showClasification?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione el clasificación </InputLabel>
								<Select
									disabled = { level == ''}
									value={clasification}
									label="Seleccione la sub directorio"
									onChange={handleChangeClasification}
								>
									{
										clasifications.map((row: any) => (
											<MenuItem key={row.id} value={row.id}>{row.nombre}</MenuItem>
									))}
								</Select>
							</FormControl>
							:null
						}
						{
							showFormato?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la Formato </InputLabel>
								<Select
									value={format}
									label="Seleccione la Formato"
									onChange={handleChangeFormat}
								>
									{
										formats.map((row: any) => (
											<MenuItem key={row.id_formato} value={row.id_formato}>{row.id_formato}</MenuItem>
									))}
								</Select>
							</FormControl>
							: null
						}
						{
							showChapter?
							<FormControl size="small" fullWidth>
								<InputLabel >Seleccione la Capitulos </InputLabel>
								<Select
									disabled = { format == ''}
									value={chapter}
									label="Seleccione la Capitulo"
									onChange={handleChangeChapter}
								>
									{
										chapters.map((row: any) => (
											<MenuItem key={row.CAPI_CODIGO} value={row.CAPI_CODIGO}>{row.CAPI_TITULO}</MenuItem>
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
						{/* <CollapsibleTable/> */}
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