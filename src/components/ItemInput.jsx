import React from 'react'

const ItemInput = () => {
  return (
    <div className='mb-10'>
        <h4 className='text-xl font-medium mb-5 xl:text-2xl'>Fill This Form</h4>
        <form action="" className='flex flex-col gap-y-2.5 xl:w-1/3'>
            <label htmlFor="" className='xl:text-base'>Name Of Item</label>
            <input type="text" className='p-2 border-solid border-2  border-gray-400 rounded-xl' placeholder='Name of Item' required/>
            <label htmlFor="" className='xl:text-base'>Price Of Item</label>
            <input type="number" className='p-2 border-solid border-2  border-gray-400 rounded-xl' placeholder='Price of Item' step="0.01" min="0" required/>
            <button className='bg-slate-800 p-2 rounded-xl text-slate-100'>Submit</button>
        </form>
    </div>
  )
}

export default ItemInput