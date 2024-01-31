import {configureStore} from '@reduxjs/toolkit'
import ExpensesReducer from './Expenses'

export const store = configureStore({
    reducer:{
        Expenses:ExpensesReducer
    }
})