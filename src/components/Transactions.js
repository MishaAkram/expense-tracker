import React from 'react'

export const Transactions = ({transaction}) => {
    return (
        <li className="plus">
                    {transaction.description}
                    <span>{transaction.transactionAmount}</span>
                    <button className="delete-btn">X</button>
                </li>
    )
}
