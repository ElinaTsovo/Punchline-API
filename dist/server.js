"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jokes_route_1 = require("./jokes.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', jokes_route_1.jokesRouter);
app.get('/', (request, response) => {
    response.send({
        message: '🎉 Bem-vindo à API de Piadas!',
        endpoints: {
            random: '/jokes/random',
            byIntroduction: '/jokes/introduction (POST)',
        }
    });
});
const port = process.env.PORT;
app.get('/piada', (request, response) => {
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
