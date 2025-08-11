"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jokesRouter = void 0;
const express_1 = require("express");
const jokes_controller_1 = require("./jokes.controller");
exports.jokesRouter = (0, express_1.Router)();
const joke = new jokes_controller_1.Jokes();
exports.jokesRouter.post('/get-joke', joke.getJokesUsingIntroduction);
exports.jokesRouter.get('/get-rondom-joke', joke.getJokesRondomly);
