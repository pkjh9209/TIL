import axios from ".";
import { TodoType } from "../../types/todo";

export const getTodoAPI = () => axios.get<TodoType[]>("api/todos");
