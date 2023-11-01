import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromTodo, editTodo } from '../redux/todoSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Tasks() {

    const taskArray = useSelector((state)=>state.todoReducer)
    const dispatch = useDispatch()

    const [showTask,setShowTask] = useState({
        id:"",task:"",ischecked:false
    })
    const [newval,setNewval] = useState({
        id:"",task:"",ischecked:false
    })

    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getTask = ()=>{
        setShowTask(taskArray)
    }


    const showEdit = (todo,index)=>{
        setNewval({...newval,task:todo.task,id:todo.id})
        handleShow()
    }

    const pickValue = (e,newval)=>{
        setNewval({...newval,task:e.target.value,id:newval.id,isclicked:false})
    }

    console.log(newval);

    const saveTask = () =>{
        if(newval.task){
            dispatch(editTodo(newval))
        }else{
            toast.warning("Type Todo")
        }
        handleClose()
    }
    

    useEffect(()=>{
        getTask()
    })


  return (
   <>
        <div className='mt-5 flex justify-center'>
                <div className='flex-row w-4/5'>
                    {
                        showTask.length>0?
                        showTask.map((todo,index)=>(
                            <div className='flex items-center border-1 border-green-900 text-green-200  h-20 pt-3 md:py-2 mb-2 overflow-x-auto scrollbar-none scroll-smooth'>
                            <p className='w-0 md:w-1 ms-4 text-sm md:text-2xl'>{index+1}</p>
                            <p className='md:w-80 text-sm md:text-2xl ms-10'>{todo.task}</p>
                            <Button onClick={()=>showEdit(todo,index)}  variant="outline-warning" className='md:ms-auto ms-2 md:ms-2'><i className='fa-solid fa-pen-to-square text-xs'></i></Button>
                            <Button variant="outline-danger" className='ms-2 md:ms-5 me-2 md:me-5' onClick={()=>dispatch(deleteFromTodo(todo.id))}><i className='fa-solid fa-trash fa-xs'></i></Button>
                        </div>
                        )):null    
                    }
                </div>
                <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className='mt-32 md:mt-56'
            >
                <Modal.Body className='bg-sky-950 '>                
                    <input type="text" onChange={(e)=>pickValue(e,newval)} value={newval.task} className='form-control' placeholder='Enter the Todo Task'/>
                </Modal.Body>
                <Modal.Footer className='bg-sky'>
                <Button variant="outline-info" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="outline-warning" onClick={()=>saveTask()}>Update</Button>
                </Modal.Footer>
             </Modal>
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

export default Tasks