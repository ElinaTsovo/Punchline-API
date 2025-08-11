import { Router } from "express"
import { Jokes } from "./jokes.controller"

export const jokesRouter = Router()

const joke = new Jokes()


jokesRouter.post('/get-joke', joke.getJokesUsingIntroduction)
jokesRouter.get('/get-rondom-joke', joke.getJokesRondomly)