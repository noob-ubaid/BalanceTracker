import React from 'react'

function TransectionsList({transections}) {
  return (
    <>
        <ul className=''>
            {
                transections.map((transaction)=>(
                    <li className={`p-2 m-2 flex flex-row justify-between ${transaction.amount > 0 ? "bg-green-100" : "bg-red-100"}`}>
                        {transaction.text}
                        <span>{transaction.amount}</span>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default TransectionsList