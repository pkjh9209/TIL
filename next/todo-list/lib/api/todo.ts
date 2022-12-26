import axios from ".";
import { TodoType } from "../../types/todo";

export const getTodoAPI = () => axios.get<TodoType[]>("api/todos");

//* 투두 체크하기 API
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
