import { useState,useContext , createContext } from 'react';
import { postExpenses } from '../seeds/https';
import { getExpenses } from '../seeds/https';
import { putExpenses } from '../seeds/https';
import { deleteExpenses } from '../seeds/https';

export const ExpenseContext = createContext({
    expense:[],
    setExpenses:(expenses:any)=>{},
    addExpense: (newExpense:any)=>{},
    editExpense: (expense:any,editExpense:any)=>{},
    deleteExpense: (expense:any,id:any)=>{}


})


// create add , edit , delete functions here
function ExpenseContextProvider({children}:any){
    let [expense,setExpense]:any = useState([])
    function setExpenses(expenses:any){
        console.log(expenses)
        setExpense([...expenses])
        //console.log('got')
    }
    async function addExpense(newExpense:any){
        let id=await postExpenses(newExpense)
        newExpense.id=id.name
        console.log(newExpense.id)
        setExpense([...expense,newExpense])

    }
    async function editExpense(expense:any,editExpense:any){
        let updatedExpense = expense.map((item: { id: any; })=>{
            if(item.id === editExpense.id){
                    return editExpense
            }
            return item
        })
        let response=await putExpenses(editExpense)
        console.log(response)
        setExpense([...updatedExpense])
    }
    async function deleteExpense(expense:any,id:any){
        let updatedExpense = expense.filter((item: { id: any; })=>{
            if(item.id !== id){
                return item
            }
        })
        let response=await deleteExpenses(id)
        console.log(response)
        setExpense([...updatedExpense])

    }
    let value={
        expense:expense,
        setExpenses:setExpenses,
        addExpense:addExpense,
        editExpense:editExpense,
        deleteExpense:deleteExpense
    }
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>

}

export default ExpenseContextProvider