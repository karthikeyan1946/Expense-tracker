import axios from "axios";


// get
export async function getExpenses(){
    let res=await axios.get('https://expensetracker-bb0b9-default-rtdb.firebaseio.com/expenses.json')
      let ans = res.data
      if(!ans)return []
      let expenses = Object.entries(ans).map((entry)=>{
        return {...entry[1],'id':entry[0]}
      }) 
      //console.log(expenses)
      return expenses
}

// post
export async function postExpenses(expense){
    let res=await axios.post('https://expensetracker-bb0b9-default-rtdb.firebaseio.com/expenses.json',expense)
    //console.log(res)
    return res.data
}

// put

export async function putExpenses(expense){
    try{
    console.log(expense.id)
    let res=await axios.put(`https://expensetracker-bb0b9-default-rtdb.firebaseio.com/expenses/${expense.id}.json`,expense)
    return res.data
    }catch(err){
        console.log(err)
    }
}


// delete
export async function deleteExpenses(id){
    try{
        let res=await axios.delete(`https://expensetracker-bb0b9-default-rtdb.firebaseio.com/expenses/${id}.json`)
        return res.data
    }catch(err){
        console.log(err)
    }
}