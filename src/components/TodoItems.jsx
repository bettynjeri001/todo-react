import React from 'react'
import check from '../assets/check.png'
import oval from '../assets/oval.png'
import trash from '../assets/trash.png'

const TodoItems = ({text , id , isComplete , deleteTodo , toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => {toggle(id)}}className=' flex flex-1 items-center cursor-pointer'>
        <img src={ isComplete ? check : oval} alt="" className='w-7 '/>
        <p className={`text-black ml-4 text-[17px] ${isComplete ? "line-through" : "" }`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}}src={trash} alt="" className='w-3.5  cursor-pointer'/>
    </div>
  )
}

export default TodoItems
