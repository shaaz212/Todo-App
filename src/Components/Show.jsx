import React from 'react'
import Add from './Add'
import Tasks from './Tasks'

function Show() {
  return (
   <div className='flex justify-center items-center h-full '>
        <div className='flex-col justify-center w-4/5 md:w-3/5 h-5/6 rounded-lg  shadow bg-black text-white overflow-y-auto scrollbar-none scroll-smooth'>
            <h1 className='text-center text-green-500 text-2xl font-bold mt-4'>Todo App</h1>
            <Add />
            <Tasks />
        </div>
   </div>
  )
}

export default Show