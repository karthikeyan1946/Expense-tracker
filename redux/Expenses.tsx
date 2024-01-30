import { createSlice } from '@reduxjs/toolkit'




const expenses:object[]=[]
const ExpensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: expenses
    },
    reducers: {
        setExpenses:(state,action)=>{
            state.expenses=action.payload.expenses
        },
        addExpense: (state,action)=>{
            state.expenses.push(action.payload.expenses)

            
        },
        editExpense:(state,action)=>{
            let updatedExpenses = state.expenses.map((item:any)=>{
                if(item.id === action.payload.editExpense.id){
                        return action.payload.editExpense
                }
                return item
            })
            state.expenses=updatedExpenses

        },
        deleteExpense:(state,action)=>{
            let updatedExpenses = state.expenses.filter((item: any)=>{
                if(item.id !== action.payload.id){
                    return item
                }
            })
            state.expenses=updatedExpenses
        }
    }
})


export const setExpenses=ExpensesSlice.actions.setExpenses
export const addExpense=ExpensesSlice.actions.addExpense
export const editExpense=ExpensesSlice.actions.editExpense
export const deleteExpense=ExpensesSlice.actions.deleteExpense
export default ExpensesSlice.reducer