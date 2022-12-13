
import Axios from "axios";
import {GetServerSideProps, NextPage} from "next";
import React from "react";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import {getTodoAPI} from "../lib/api/todo"



const todos : TodoType[] = [
  {id :1 , text: "마트가서 장보기111",color: "red", checked : false},
  {id :2 , text: "숙제하기",color: "orange", checked : false},
  {id :3 , text: "코딩하기",color: "yellow", checked : true},
  {id :4 , text: "넥스트공부하기",color: "green", checked : false},
  {id :5 , text: "요리연습하기",color: "blue", checked : false},
  {id :6 , text: "퇴근하기",color: "navy", checked : false},
];

const app : NextPage = () => {
  return <TodoList todos = {todos} />;
}


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const {data} = await getTodoAPI();
    console.log(data);
    return {props:{}};
  } catch (e) {
    console.log(e);
    return {props:{}};
  }
};

export default app;
