import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='p-8 rounded-xl w-1/2 bg-red-400 text-white'><h2 className='text-3xl font-semibold'>0</h2><h3 className='text-xl font-medium'>New Task</h3></div>
        <div className='p-8 rounded-xl w-1/2 bg-blue-400 text-white'><h2 className='text-3xl font-semibold'>0</h2><h3 className='text-xl font-medium'>New Task</h3></div>
        <div className='p-8 rounded-xl w-1/2 bg-green-400 text-white'><h2 className='text-3xl font-semibold'>0</h2><h3 className='text-xl font-medium'>New Task</h3></div>
        <div className='p-8 rounded-xl w-1/2 bg-yellow-400 text-white'><h2 className='text-3xl font-semibold'>0</h2><h3 className='text-xl font-medium'>New Task</h3></div>
    </div>
  )
}

export default TaskListNumber;