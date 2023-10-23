import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './sllices/counter/couter_slice'
import homeReducer from '../../feature/home/presentation/slices/home_slice'


export  const store = configureStore({
	reducer: {
		counter: counterReducer,
		home: homeReducer,
	}
})