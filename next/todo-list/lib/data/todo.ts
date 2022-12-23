import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

//* 투두 리스트 데이터 불러오기
const getList = () => {
  const todoBuffer = readFileSync("data/todo.json");
  const todoString = todoBuffer.toString();
  if (!todoString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todoString);
  return todos;
};

//* id의 투두가 있는지 확인하기
const exist = ({ id }: { id: number }) => {
  const todos = getList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};

const write = async (todos: TodoType[]) => {
  writeFileSync("data/todos.json", JSON.stringify(todos));
};

export default { getList, exist, write };
