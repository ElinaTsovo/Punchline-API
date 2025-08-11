import { Request, Response } from "express";
import { piadas } from "./jokes";

export class Jokes {
    async getJokesUsingIntroduction(request:Request, response:Response): Promise<any>{
        try {
            const {introduction} = request.body
            
            
            if (!introduction){
                throw{status:(404), message:"Introduction is mandatory.", erorr:"Bad Request"}
            }

            const jokeFound = piadas.find(
                jk => jk.introduction.toLowerCase() === introduction.toLowerCase()

            )

            if (!jokeFound){
                throw{statu:(400), message:"the introduction provided was not found", error:"Not Found"}
            }

            return response.status(200).json({joke:jokeFound})
        } catch (error) {
            return response.status(500).json({error:error})

            
        }
    }

    async getJokesRondomly(request:Request, response:Response):Promise<any>{
        try {
            const rondomJokes = piadas.sort(()=> 0.5 - Math.random())[0]
            return response.status(200).json({joke:rondomJokes})
        } catch (error) {
            return response.status(500).json({error:error})
            
        }
    }
}