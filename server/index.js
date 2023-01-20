import express from 'express';
import env from 'dotenv';
import cors from 'cors';

import bodyParser from 'body-parser';
const router = express.Router();

import { studentQuestionsfromDB } from './controllers/questionController.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.use(cors());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use('/questions', studentQuestionsfromDB);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, function () {
    console.log(`server has started at port no ${PORT}`)
})


