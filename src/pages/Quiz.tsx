import {Box, Button, Container, Typography} from "@mui/material";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Question from "../components/Question";
import {QuizType, QuizzesType} from "../types/commonTypes";

const Quiz = () => {
    const {control, handleSubmit} = useForm()
    const quizData:string = localStorage.getItem('Tests')!
    const quizzes :QuizzesType = JSON.parse(quizData)
    const {name} = useParams()
    const [quiz, setQuiz] = useState<QuizType>(() => quizzes.find((item) => item.name === name)!)
    const [quizCorrection , setQuizCorrection] = useState<undefined | number>(undefined)
    const submitTest:SubmitHandler<FieldValues> = (answers) => {
        const correctAnswers = quiz.questions.map((item)=>item.correct)
        const answer:string[] = []
        for (let answersKey in answers) {
            answer.push(answers[answersKey])
        }
        const correctness:boolean[] = []
        for (let i = 0; i < answer.length; i++) {
            correctness.push(answer[i] === correctAnswers[i])
        }
        const falseAnswers = correctness.filter(item=>!item)
        setQuizCorrection(falseAnswers.length)
    }
    return (
        <Container>
            <Box component={'form'} onSubmit={handleSubmit(submitTest)}>
                <Box mb={1}>
                    <Box>
                        {
                            quiz?.questions?.map((item, index: number) => {
                                return (
                                    <Question key={index} item={item} index={index + 1} control={control}/>
                                )
                            })
                        }
                    </Box>
                    <Button variant={'outlined'} type={'submit'}>ثبت پاسخ ها</Button>
                </Box>
                {
                    quizCorrection ?
                        <Typography mt={3}> شما به {quizCorrection} سوال از {quiz?.questions.length} سوال پاسخ غلط دادید ! </Typography>
                        :
                        null
                }
            </Box>

        </Container>
    )
}
export default Quiz;