// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const DbConn = require("../../common/config/db/DbConn");

export default function memberRead(req: NextApiRequest, res: NextApiResponse) {
  DbConn.query(" SELECT * FROM co_member", function (err: any, result: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}
