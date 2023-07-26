import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = `#graphql
    type MyResultData {
        data1 : Int
        data2 : String
        data3 : String
        }

    type Query{
        fetchBoards : [MyResultData]
    }
`;

const resolvers = {
    Query:{
        fetchBoards : (parent, args, context, info) => {
            const resultData = [{
                    data1 : 1
                    ,data2 : "test"
                    ,data3 : "content"
                }
            ];
            return resultData
        }
    },

    Mutation : {
        createBoard : () =>{
            return "result success"
        }
    }
}

const server = new ApolloServer({
    typeDefs : typeDefs,      //docs
    resolvers: resolvers,     //api
    cors: true
    // cors:{orgiin : ["domain","domain"]}
})

startStandaloneServer(server) //port : 4000