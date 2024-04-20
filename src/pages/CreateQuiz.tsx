import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import QuestionInput from "../components/QuestionInput";
import TextInput from "../components/TextInput";
import {QuestionType} from "../types/commonTypes";
import {useNavigate} from "react-router-dom";

const CreateQuiz = () => {
    const form = useForm({reValidateMode: 'onChange'})
    const numberForm = useForm({reValidateMode: 'onChange'})
    const [oneByOne, setOneByOne] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0)
    const getNumber: SubmitHandler<FieldValues> = (res) => {
        setQuestionNumber(+res.number)
    }
    const navigator = useNavigate()
    const addQuestion = () => {
        setQuestionNumber(prev => ++prev)
        setOneByOne(true)
    }
    const SubmitForm: SubmitHandler<FieldValues> = (res) => {
        const quizzes = JSON.parse(localStorage.getItem('Tests') || '[]')
        const questions: QuestionType = [];
        [...Array(questionNumber)].forEach((n, i) => {
            const index = i + 1
            const question = {
                question: res[`question_${index}`],
                answers: [res[`answer_${index}_1`], res[`answer_${index}_2`], res[`answer_${index}_3`], res[`answer_${index}_4`]],
                correct: res[`radio_${index}`]
            }
            questions.push({...question})
        })
        const quiz = {questions: questions, name: form.getValues('quiz-name')}
        quizzes.push(quiz)
        localStorage.setItem('Tests', JSON.stringify(quizzes))
        setQuestionNumber(0)
        numberForm.reset()
        navigator('/select-quiz')
    }
    return (
        <Container>
            {
                questionNumber ?
                    <FormProvider {...form}>
                        <Box component={'form'} onSubmit={form.handleSubmit(SubmitForm)}>
                            <Grid justifyContent={'end'} rowGap={1} container alignItems={'center'}>
                                <Grid item xs={12} md={2}>
                                    <Typography>نام کوییز را انتخاب کنید</Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <TextInput errorText={'وارد کردن نام کوییز اجباری می باشد'} label={'نام کوییز'} name={'quiz-name'}/>
                                </Grid>
                                {
                                    [...Array(questionNumber)].map((n, i) => {
                                        return <QuestionInput key={i} index={i + 1}/>
                                    })
                                }
                                <Grid item xs={12} md={'auto'} gap={1} sx={{display: 'flex'}}>
                                    <Button sx={{width: {md: 'auto', xs: '100%'}}} type={'submit'} variant={'outlined'}>ثبت
                                        کوییز</Button>
                                    {
                                        oneByOne ?
                                            <Button onClick={addQuestion} size={'small'}
                                                    sx={{width: {md: 'auto', xs: '100%'}}} variant={'outlined'}>اضافه
                                                کردن</Button>
                                            : null
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </FormProvider>
                    :
                    <FormProvider {...numberForm}>
                        <Grid sx={{rowGap: 3}} container justifyContent={'space-between'} alignItems={'center'}
                              component={'form'} onSubmit={numberForm.handleSubmit(getNumber)}>
                            <Grid item xs={12}>
                                <Typography>در صورت تمایل تعداد سوالات را وارد کنید در غیر این صورت سوالات
                                    را تک به تک اضافه کنید</Typography>
                            </Grid>
                            <Grid item md={7} xs={12}>
                                <TextInput errorText={'وارد کردن عدد اجباری می باشد'} label={'تعداد سوالات'} name={'number'}/>
                            </Grid>
                            <Grid item xs={12} md={'auto'} gap={1} sx={{display: 'flex'}}>
                                <Button size={'small'} sx={{width: {md: 'auto', xs: '100%'}}} variant={'outlined'}
                                        type={'submit'}>ثبت</Button>
                                <Button onClick={addQuestion} size={'small'} sx={{width: {md: 'auto', xs: '100%'}}}
                                        variant={'outlined'}>اضافه کردن</Button>
                            </Grid>
                        </Grid>
                    </FormProvider>
            }
        </Container>
    )
}
export default CreateQuiz;