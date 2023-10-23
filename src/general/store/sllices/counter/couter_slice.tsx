import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
	name:'counter',
	initialState:{
		counter: 10,
		list:[]
	},
	reducers:{
		increment: (state:any) =>{
			state.value += 1
		},
		setUserList:(state, action) => {
			state.list = action.payload
		}

	}
})


export const { increment, setUserList } = counterSlice.actions

export default counterSlice.reducer

