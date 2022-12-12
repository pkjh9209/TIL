import React,{useCallback,useMemo} from "react";
import styled from "styled-components";
import palette from "../styles/palettes";
import { TodoType } from "../types/todo";

const Container = styled.div`
    width : 100%;
    max-width: 750px;
    margin:auto;

    .todo-list{
        .todo-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 52px;
            border-bottom: 1px solid ${palette.gray};

            .todo-right-side{
                display: flex;
                margin-right: 12px;

                .todo-button{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid ${palette.gray};
                    background-color: transparent;
                    outline:none;
                }
            }

            .todo-left-side{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                .todo-color-block{
                    width: 12px;
                    height: 100%;
                }
                .checked-todo-text{
                    color:${palette.gray};
                    text-decoration : line-through;
                }
                .todo-text{
                    margin-left:12px;
                    font-size: 16px;
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
        display:flex;
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
        todos.forEach((todo) => {
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
    

    return (
        <Container>
            <div className="todo-list-heder">

                TODO 남은 개수 <p>{todos.length}개</p>

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
                {todos.map((todo)=>(
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

                        </div>
                    </li>
                    
                ))}
            </ul>
        </Container>
    )
}

export default TodoList;