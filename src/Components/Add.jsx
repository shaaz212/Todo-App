import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToTodo } from '../redux/todoSlice';
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add() {

  const dispatch = useDispatch()

  // New unique id
  const unique_id = uuid();
  // Get first 8 characters using slice
  const small_id = unique_id.slice(0, 2);

  const [todo,setTodo] = useState({
    id:"",task:"",isclicked:false
  })

  const addingToTask = (e)=>{
    setTodo({task:e.target.value,id:small_id,isclicked:false})
  }

  const addToTask = () =>{
    if (todo.task) {
      dispatch(addToTodo(todo))
      setTodo({task:"",id:"",isclicked:false})
    }else{
      toast.error("type data")
    }
  }


  return (
   <>
      <div>
          <form className='flex justify-center mt-5'>
              <input type="text" value={todo.task} className='text-white font-bold text-lg px-5 md:px-1 w-1/2 rounded-lg md:h-10 bg-green-700 outline-none me-3 shadow-white' placeholder='Add Todo Task' onChange={(e)=>addingToTask(e)}/>
              <button type='button' className='bg-white text-green-300 text-lg font-extrabold shadow-white rounded-xl w-20' onClick={()=>addToTask()}>Add</button>
          </form>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      /> 
   </>
  )
}

export default Add