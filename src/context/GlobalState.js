import React,{Children, createContext ,useReducer} from "react";
import AppReducer from './AppReducer'
const iniitialState ={
    transactions: [
        {id: 1,
         description :"Income 1",
        transactionAmount:1000},
        {id: 1,
         description :"Expense 1",
        transactionAmount:-100},
        {id: 1,
         description :"Income 2",
        transactionAmount:3000},
        {id: 1,
         description :"Expense 2",
        transactionAmount:-500}
    ]
}

//create the global context
export const GlobalContext =createContext(iniitialState);

//create a provider for the global context
export const GlobalProvider = ({children}) => {
    const [state ,dispatch] =useReducer(AppReducer, iniitialState)

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
                
            }
        }
        >{children}</GlobalContext.Provider>
    )
}