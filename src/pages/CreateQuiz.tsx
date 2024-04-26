import {Container} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import QuizBuilder from "../components/createQuiz/QuizBuilder";
import QuestionNumberGetter from "../components/createQuiz/QuestionNumberGetter";

const CreateQuiz = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const numberOfQuestionForm = useForm<{ number: number }>({reValidateMode: 'onChange'})
    const addQuestion = () => {
        setQuestionNumber(prev => ++prev)
    }
    const onSubmitQuiz = () => {
        setQuestionNumber(0)
        numberOfQuestionForm.reset()
    }
    const getNumberOfQuestions: SubmitHandler<{ number: number }> = (res) => {
        setQuestionNumber(+res.number)
    }
    return (<Container>
        {questionNumber ?
            <QuizBuilder questionNumber={questionNumber} onSubmitFn={onSubmitQuiz} addQuestion={addQuestion}/> :
            <QuestionNumberGetter form={numberOfQuestionForm} onSubmit={getNumberOfQuestions}
                                  addQuestion={addQuestion}/>
        }
    </Container>)
}
export default CreateQuiz;