import { type } from "os";
import { TodoType } from "../types/todo";

export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

export const setTOdo = (payload : TodoType[]) =>{
    return{
        type:INIT_TODO_LIST,
        payload,
    }
}