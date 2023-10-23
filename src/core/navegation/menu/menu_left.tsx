import { useEffect, useState } from "react";
import { FaDAndD, FaDiceD6, FaSitemap } from "react-icons/fa";
import MenuLateral from "../../../app/component/menu/menu_lateral";
import menuI from "../../Interface/menu_interface";


const MenuLeft = () => {
	const [listMenu, setlistMenu] = useState<menuI[]>([])

	var initialMenu = ''
	useEffect(() => {
		var menuDashboard: menuI = { name: 'dashboard', ruta: 'dashboard', icono: <FaDAndD/>, state: true, subMenu:[
			{name: 'Usuarios',ruta:'user'},
			{name: 'Pacientes',ruta:'pacientes'},
			{name: 'Personal',ruta:'personal'},
			{name: 'Reportes',ruta: initialMenu },
		]}
		var menuCosumoApi: menuI = { name: 'Consumo de Api', ruta: 'consumodeapi', icono: <FaSitemap/>, state: false, subMenu:[
			{name: 'Rick y Morty',ruta:'rickandmorty'},
		]}
		var components: menuI = { name: 'Componentes', ruta: 'components', icono: <FaDiceD6/>, state: false, subMenu:[
			{name: 'Cards',ruta:'card'},
			{name: 'Buttons',ruta:'Bbutton'},
			{name: 'Paginations',ruta:'paginations'},
		]}
		setlistMenu([menuDashboard])
	}, [initialMenu])

	const handleChange = (menu:menuI) => {
		const updatedOfArray = listMenu.map( (items) =>{
			if(items.name === menu.name){
				return items.state === true ? { ...items, state: false }:{ ...items, state: true }
			}else{
				return { ...items}
			}
		}
		);
		setlistMenu(updatedOfArray)
	};
	return(
		<>
			<MenuLateral MenuCore={listMenu} handleChange={handleChange}></MenuLateral>
		</>
	)

}

export default MenuLeft