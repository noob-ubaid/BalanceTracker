import React from 'react'

function Balance({Balance}) {
  return (
    <>
      <div className='text-center '>
        <h2 className='text-lg'>Your Balance</h2>
        <h3 className='font-bold'>{Balance}</h3>
      </div>
    </>
  )
}

export default Balance