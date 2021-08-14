import React, {useContext } from 'react'
import ExpenseItem from "./ExpenseItem";
import {AppContext} from "./context/AppContext";

const ExpenseList = () => {

    const {expenses} = useContext(AppContext);

    // const expenses = [
    //     { id: 12, name: 'shopping', cost: 1000 },
    //     { id: 13, name: 'holiday', cost: 500 },
    //     { id: 14, name: 'bike service', cost: 500 },
    // ];


    return (
        <>
            <ul className="list-group">
                {
                    expenses.map((expense) => (
                        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                    ))
                }
            </ul>
        </>
    )
}

export default ExpenseList
