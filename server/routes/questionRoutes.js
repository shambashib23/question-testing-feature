import { studentQuestionsfromDB } from "../controllers/questionController";

const route = express.Router();

route.get('/questions', studentQuestionsfromDB);

route.get('/questions', (req, res) => {
    const studentQuestions = studentQuestionsfromDB();

    res.json(studentQuestions);
    console.log(studentQuestions);
})

export default route;