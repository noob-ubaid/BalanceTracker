import React, { useState } from 'react'

function AddTransaction({addTransection}) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === "" || amount === 0) return;
    addTransection({id:Math.random(), text, amount: +amount})
    setText("");
    setAmount(0)
  }
  return (
    <>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <input type="text" value={text} placeholder='Add description' className='p-2 m-2 border border-indigo-500' onChange={(e) => setText(e.target.value)} />
            <input type="number" value={amount} placeholder='Add amount' className='p-2 m-2 border border-indigo-500' onChange={(e)=>setAmount(e.target.value)} />
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-sm'>Add amount</button>
        </form>
    </>
  )
}

export default AddTransaction