import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import QuestionInput from "../components/QuestionInput";
import TextInput from "../components/TextInput";
import {QuestionType} from "../types/commonTypes";


const CreateQuiz = () => {
    const {control, handleSubmit, getValues} = useForm({reValidateMode: 'onChange'})
    const {control: controlNumber, handleSubmit: handleSubmitNumber , reset:resetNumber} = useForm({reValidateMode: 'onChange'})
    const [questionNumber, setQuestionNumber] = useState(0)
    const getNumber:SubmitHandler<FieldValues> = (res) => {
        setQuestionNumber(+res.number)
    }
    const SubmitForm = () => {
        const quizzes = JSON.parse(localStorage.getItem('Tests') || '[]')
        const questions: QuestionType = [];
        [...Array(questionNumber)].forEach((n, i) => {
            const index = i + 1
            const question = {
                question: getValues(`question_${index}`),
                answers: [getValues(`answer_${index}_1`), getValues(`answer_${index}_2`), getValues(`answer_${index}_3`), getValues(`answer_${index}_4`)],
                correct: getValues(`radio_${index}`)
            }
            questions.push({...question})
        })
        const quiz = {questions: questions, name: getValues('quiz-name')}
        quizzes.push(quiz)
        localStorage.setItem('Tests', JSON.stringify(quizzes))
        setQuestionNumber(0)
        resetNumber()

    }
    return (
        <Container>
            {
                questionNumber ?
                    <Box component={'form'} onSubmit={handleSubmit(SubmitForm)}>
                        <Grid justifyContent={'end'} rowGap={1} container alignItems={'center'}>
                            <Grid item xs={12} md={2}>
                                <Typography>نام کوییز را انتخاب کنید</Typography>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <TextInput label={'نام کوییز'} control={control} name={'quiz-name'}/>
                            </Grid>
                            {
                                [...Array(questionNumber)].map((n, i) => {
                                    return <QuestionInput key={i} control={control} index={i + 1}/>
                                })
                            }
                            <Grid item xs={12} md={'auto'}>
                                <Button fullWidth type={'submit'} variant={'outlined'}>ثبت کوییز</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    <Grid sx={{rowGap: 3}} container justifyContent={'space-between'} alignItems={'center'}
                          component={'form'} onSubmit={handleSubmitNumber(getNumber)}>
                        <Grid item md={6} xs={12}>
                            <TextInput label={'تعداد سوالات'} control={controlNumber} name={'number'}/>
                        </Grid>
                        <Grid item xs={12} md={'auto'}>
                            <Button fullWidth variant={'outlined'} type={'submit'}>ثبت</Button>
                        </Grid>
                    </Grid>
            }
        </Container>
    )
}
export default CreateQuiz;