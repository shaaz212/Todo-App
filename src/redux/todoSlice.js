import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addToTodo:(state,action)=>{
            state.push(action.payload)
        },
        deleteFromTodo:(state,action)=>{
            return state.filter(item=>item.id!=action.payload )
        },
        editTodo:(state,action)=>{ 
            state.map((item,index)=>{
                if (item.id===action.payload.id) {
                    state[index]=action.payload
                }
            return state
        })
        }
    }
})

export const { addToTodo, deleteFromTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer