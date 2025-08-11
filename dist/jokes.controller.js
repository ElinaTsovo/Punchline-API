"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jokes = void 0;
const jokes_1 = require("./jokes");
class Jokes {
    async getJokesUsingIntroduction(request, response) {
        try {
            const { introduction } = request.body;
            if (!introduction) {
                throw { status: (404), message: "Introduction is mandatory.", erorr: "Bad Request" };
            }
            const jokeFound = jokes_1.piadas.find(jk => jk.introduction.toLowerCase() === introduction.toLowerCase());
            if (!jokeFound) {
                throw { statu: (400), message: "the introduction provided was not found", error: "Not Found" };
            }
            return response.status(200).json({ joke: jokeFound });
        }
        catch (error) {
            return response.status(500).json({ error: error });
        }
    }
    async getJokesRondomly(request, response) {
        try {
            const rondomJokes = jokes_1.piadas.sort(() => 0.5 - Math.random())[0];
            return response.status(200).json({ joke: rondomJokes });
        }
        catch (error) {
            return response.status(500).json({ error: error });
        }
    }
}
exports.Jokes = Jokes;
