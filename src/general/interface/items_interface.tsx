import metaI from "./item_interface"

interface itemI<v> {
	items?: v | any
	meta?: metaI
}

export default itemI