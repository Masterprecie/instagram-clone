import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const Store = configureStore({
	reducer: { data: rootReducer },
})