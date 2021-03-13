import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add new Transactions</h3>
            <form>
                <div className="form control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Detail of transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                      </label>
                    <input
                        type="number"
                        id="transactionamount"
                        placeholder="Enter Transaction" />
                </div>
                <button className= "btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
