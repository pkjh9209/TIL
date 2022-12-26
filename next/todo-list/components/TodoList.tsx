import React,{useCallback,useMemo,useState} from "react";
import styled from "styled-components";
import palette from "../styles/palettes";
import { TodoType } from "../types/todo";
import TrashCanIcon from "../public/static/svg/trash_can.svg";
import CheckMarkIcon from "../public/static/svg/check_mark.svg";
import { checkTodoAPI, deleteTodoAPI } from "../lib/api/todo";

import Data from "../lib/data";
import Router from "next/router";
import todo from "../lib/data/todo";


const Container = styled.div`
    width : 100%;
    max-width: 750px;
    margin:auto;

    .todo-list {
        .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 52px;
        border-bottom: 1px solid ${palette.gray};

            .todo-left-side {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                .todo-color-block {
                width: 12px;
                height: 100%;
                }
                .checked-todo-text {
                color: ${palette.gray};
                text-decoration: line-through;
                }
                .todo-text {
                margin-left: 12px;
                font-size: 16px;
                }
            }
            .todo-right-side {
                display: flex;
                align-items: center;
                margin-right: 12px;
                svg {
                &:first-child {
                    margin-right: 16px;
                }
                }
                .todo-trash-can {
                width: 16px;
                path {
                    fill: ${palette.deep_red};
                }
                }
                .todo-check-mark {
                fill: ${palette.deep_green};
                }
                .todo-button {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 1px solid ${palette.gray};
                background-color: transparent;
                outline: none;
                }
            }
        }
    }

    .todo-list-heder{
        padding: 12px;
        border-bottom: 1px solid ${palette.gray};
        .todo-list-last-todo{
            font-size:  14px;
            span {
                margin-left: 8px;
            }
        }
    }

    .todo-list-header-colors{
        padding: 20px;
        display:flex;
        border-bottom: 1px solid #ddd ;
        .todo-list-header-color-num{
            display:flex;
            margin-right: 8px;
            p{
                font-size: 14px;
                line-height: 16px;
                margin:0;
                margin-left:6px;
            }
            .todo-list-header-round-color{
                width: 16px;
                height: 16px;
            }
        }
    }
    .bg-red{
        background-color: ${palette.red};
    }
    .bg-blue{
        background-color: ${palette.blue};
    }
    .bg-green{
        background-color: ${palette.green};
    }
    .bg-navy{
        background-color: ${palette.navy};
    }
    .bg-orange{
        background-color: ${palette.orange};
    }
    .bg-yellow{
        background-color: ${palette.yellow};
    }



`;


interface IProps{
    todos:TodoType[];
}

//React.Fc 이슈 확인해보기

const TodoList : React.FC<IProps> = ({todos}) =>{

    const getTodoColorNums = useCallback(() => {
        let red = 0;
        let orange = 0;
        let yellow = 0;
        let green = 0;
        let blue = 0;
        let navy = 0;
        localTodos.forEach((todo) => {
          switch (todo.color) {
            case "red":
              red += 1;
              break;
            case "orange":
              orange += 1;
              break;
            case "yellow":
              yellow += 1;
              break;
            case "green":
              green += 1;
              break;
            case "blue":
              blue += 1;
              break;
            case "navy":
              navy += 1;
              break;
            default:
              break;
          }
        });
    
        return {
          red,
          orange,
          yellow,
          green,
          blue,
          navy,
        };
      }, [todos]);

      type ObjectIndexType = {
        [key: string]: number | undefined;
      };
    
      //* 색깔 객체 구하기 2
      const todoColorNums = useMemo(() => {
        const colors: ObjectIndexType = {};
        todos.forEach((todo) => {
          const value = colors[todo.color];
          if (!value) {
            //* 존재하지않던 key라면
            colors[`${todo.color}`] = 1;
          } else {
            //* 존재하는 키라면
            colors[`${todo.color}`] = value + 1;
          }
        });
        return colors;
      }, [todos]);

  //투두 체크하기
    const [localTodos,setLocalTodos] = useState(todos);
    const checkTodo = async (id:number) => {
        try {
            await checkTodoAPI(id);
            console.log('체크함');
            // 체크방법 1 데이터 다시받기
            // Router.reload;

            // 체크방법 2 데이터 다시받기
            // Router.push("/");
            
            // 체크방법 3 data 를 local로 저장하여 사용하기
            const newTodos = localTodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo,checked: !todo.checked}
                }
                return todo;
            });
            setLocalTodos(newTodos);
        } catch (e) {
            console.log(e);
        }
    }

  //투두 삭제하기
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setLocalTodos(newTodos);
      console.log("삭제했습니다.");
    } catch (e) {
      console.log(e);
    }
  };      
    return (
        <Container>
            <div className="todo-list-heder">
        
                TODO 남은 개수 <p>{localTodos.length}개</p>

            </div>
            <div className="todo-list-header-colors">
                {Object.keys(todoColorNums).map((color,index)=>(
                    <div className="todo-list-header-color-num" key={index}>
                        <div className={`todo-list-header-round-color bg-${color}`}/>
                        <p>{todoColorNums[color]}개</p>
                    </div>
                ))}
            </div>

            <ul className="todo-list">
                {localTodos.map((todo)=>(
                    <li className="todo-item" key={todo.id}>
                        <div className="todo-left-side">
                            <div className={`todo-color-block bg-${todo.color}`} />
                            <p
                                className={`todo-text ${
                                todo.checked ? "checked-todo-text" : ""
                                }`}
                            >
                                {todo.text}
                            </p>
                        </div>
                        <div className="todo-right-side">
                        {todo.checked && (
                            <>
                            <TrashCanIcon
                                className="todo-trash-can"
                                onClick={() => {
                                
                                }}
                            />
                            <CheckMarkIcon
                                className="todo-check-mark"
                                onClick={() => {
                                    checkTodo(todo.id);
                                }}
                            />
                            </>
                        )}
                        {!todo.checked && (
                            <button
                            type="button"
                            className="todo-button"
                            onClick={() => {
                                checkTodo(todo.id);
                            }}
                            />
                        )}
                        </div>
                    </li>
                    
                ))}
            </ul>
        </Container>
    )
}

export default TodoList;