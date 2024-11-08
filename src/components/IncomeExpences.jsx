import React from 'react'

function IncomeExpences({Income , Expences}) {
  return (
    <>
        <div className=' flex justify-around'>
            <div className='text-green-600'>
                <h3>Income</h3>
                <p className='text-xl font-semibold'>{Income}</p>
            </div>
            <div className='text-red-600'>
                <h3>Expences</h3>
                <p className='text-xl font-semibold'>{Expences}</p>
            </div>
        </div>
    </>
  )
}

export default IncomeExpences