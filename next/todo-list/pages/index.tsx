import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";


const todos : TodoType[] = [
  {id :1 , text: "마트가서 장보기",color: "red", checked : false},
  {id :2 , text: "숙제하기",color: "orange", checked : false},
  {id :3 , text: "코딩하기",color: "yellow", checked : true},
  {id :4 , text: "넥스트공부하기",color: "green", checked : false},
  {id :5 , text: "요리연습하기",color: "blue", checked : false},
  {id :6 , text: "퇴근하기",color: "navy", checked : false},
];

const app : NextPage = () => {
  return <TodoList todos = {todos} />;
}

export default app;
