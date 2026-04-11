import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// Configure Redux store with the todo reducer
export const store = configureStore({
    reducer: todoReducer
})