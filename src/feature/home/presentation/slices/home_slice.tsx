import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
	name:'home',
	initialState:{
		years:[],
		levels:[],
		directories:[],
		subDirectories:[],
		formats:[],
		chapters:[],
		levelDetails:[],
		categories:[],
		subCategories:[],
	},
	reducers:{
		getYears:(state, action) => {
			state.years = action.payload
		},
		getLevels:(state, action) => {
			state.levels = action.payload
		},
		getDirectories:(state, action) => {
			state.directories = action.payload
		},
		getSubDirectories:(state, action) => {
			state.subDirectories = action.payload
		},
		getFormats:(state, action) => {
			state.formats = action.payload
		},
		getChapters:(state, action) => {
			state.chapters = action.payload
		},
		getlevelDetails:(state, action) => {
			state.levelDetails = action.payload
		},
		getCategories:(state, action) => {
			state.categories = action.payload
		},
		getSubCategories:(state, action) => {
			state.subCategories = action.payload
		}
	}
})


export const {
	getYears,
	getLevels,
	getDirectories,
	getSubDirectories,
	getFormats,
	getChapters,
	getlevelDetails,
	getCategories,
	getSubCategories,
} = homeSlice.actions

export default homeSlice.reducer

