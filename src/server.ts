import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config()
import { jokesRouter } from "./jokes.route";



const app = express();
app.use(express.json());
app.use('/api', jokesRouter)

app.get('/', (request:Request, response:Response) => {
  response.send({
    message: '🎉 Bem-vindo à API de Piadas!',
    endpoints: {
      random: '/jokes/random',
      byIntroduction: '/jokes/introduction (POST)',
    }
  });
});


const port=process.env.PORT

app.get('/piada', (request:Request, response:Response )=>{
    
})




app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
});