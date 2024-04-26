import {Box, Button, Container, Typography} from "@mui/material";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import Question from "../components/Question";
import {InputValuesType} from "../types/commonTypes";
import {useGetQuizzes} from "../hooks/useGetQuizzes";
import {useCheckQuiz} from "../hooks/useCheckQuiz";

const Quiz = () => {
    const {name} = useParams()
    const form = useForm<InputValuesType>()
    const {oneQuiz} = useGetQuizzes(name)
    const {falseAnswersCount , checkAnswers} = useCheckQuiz(oneQuiz)
    const submitTest:SubmitHandler<InputValuesType> = (answers) => {
        checkAnswers(answers)
    }
    return (
        <>
            {
                oneQuiz ?
                    <Container>
                        <FormProvider {...form}>
                        <Box component={'form'} onSubmit={form.handleSubmit(submitTest)}>
                            <Box mb={1}>
                                <Box>
                                    {
                                        oneQuiz?.questions?.map((item, index: number) => {
                                            return (
                                                <Question key={index} item={item} index={index + 1}/>
                                            )
                                        })
                                    }
                                </Box>
                                <Button variant={'outlined'} type={'submit'}>ثبت پاسخ ها</Button>
                            </Box>
                            {
                                falseAnswersCount ?
                                    <Typography mt={3}> شما به {falseAnswersCount} سوال از {oneQuiz?.questions.length} سوال پاسخ غلط دادید ! </Typography>
                                    :
                                    null
                            }
                            {
                                falseAnswersCount === 0? <Typography mt={3}>شما به همه سوالات پاسخ صحیح دادید</Typography> : null
                            }
                        </Box>
                        </FormProvider>
                    </Container>:<Box>hichi</Box>
            }
        </>
    )
}
export default Quiz;