import React from 'react';
import { FaRegCircleCheck, FaRegCircle, FaTrash } from "react-icons/fa6";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <>
      <div className='flex items-center my-3 gap-2'>
        <div
          onClick={() => toggle(id)}
          className='flex flex-1 items-center cursor-pointer'
        >
          {isComplete ? (
            <FaRegCircleCheck className='text-green-500 w-6 h-6' />
          ) : (
            <FaRegCircle className='text-gray-400 w-6 h-6' />
          )}
          <p className={`ml-4 text-sm ${isComplete ? "line-through text-gray-500" : "text-black"}`}>
            {text}
          </p>
        </div>
        <FaTrash
          onClick={() => deleteTodo(id)}
          className='text-red-500 w-4 h-4 cursor-pointer'
        />
      </div>
    </>
  );
};

export default TodoItems;