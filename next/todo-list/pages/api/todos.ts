import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../types/todo";

const fs = require("fs");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile(
          "C:/TIL/next/todo-list/data/todos.json",
          (err: any, data: any) => {
            if (err) {
              return reject(err.message);
            }
            const todosData = data;
            if (!todosData) {
              return resolve([]);
            }
            const todos = JSON.parse(data);
            return resolve(todos);
          }
        );
      });
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};
