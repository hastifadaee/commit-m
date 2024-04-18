import {Box, Button, Container, Typography} from "@mui/material";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Question from "../components/layout/Question";
import {QuizType, QuizzesType} from "../types/commonTypes";

const Quiz = () => {
    const {control, handleSubmit} = useForm()
    const quizData = localStorage.getItem('Tests')
    const quizzes :QuizzesType = quizData ? JSON.parse(quizData) : []
    const {name} = useParams()
    const [quiz, setQuiz] = useState<QuizType | undefined>(() => quizzes.find((item) => item.name === name))
    const [correctQuiz , setCorrectQuiz] = useState<undefined | number>(undefined)
    const submitTest:SubmitHandler<FieldValues> = (answers) => {
        let correctAnswers: any = {}
        quiz?.questions?.map((item, index: number) => {
            const correctAnswer = {[`answer_${index + 1}`]: item.correct}
            correctAnswers = {...correctAnswers, ...correctAnswer}
        })
        const correctness = []
        for (const property in answers) {
            correctness.push(answers[property] === correctAnswers[property])
        }
        const falseAnswers = correctness.filter(item=>item===false)
        setCorrectQuiz(falseAnswers.length)
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
                    correctQuiz ?
                        <Typography> شما به {correctQuiz} سوال از {quiz?.questions.length} پاسخ غلط دادید </Typography>
                        :
                        null
                }
            </Box>

        </Container>
    )
}
export default Quiz;