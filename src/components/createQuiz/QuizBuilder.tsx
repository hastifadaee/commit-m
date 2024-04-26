import {Box, Button, Grid, Typography} from "@mui/material";
import TextInput from "../TextInput";
import QuestionInput from "../QuestionInput";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useCreateQuiz} from "../../hooks/useCreateQuiz";
import {InputValuesType} from "../../types/commonTypes";
type QuizBuilderType = {questionNumber:number , onSubmitFn :()=>void , addQuestion:()=>void}
const QuizBuilder = ({questionNumber , onSubmitFn , addQuestion}:QuizBuilderType)=>{
    const navigator = useNavigate()
    const form = useForm<InputValuesType>({reValidateMode: 'onChange'})
    const {setNewQuiz} = useCreateQuiz(questionNumber)
    const SubmitForm: SubmitHandler<InputValuesType> = (res) => {
        setNewQuiz(res)
        onSubmitFn()
        navigator('/select-quiz')
    }
    return(
        <FormProvider {...form}>
            <Box component={'form'} onSubmit={form.handleSubmit(SubmitForm)}>
                <Grid justifyContent={'end'} rowGap={1} container alignItems={'center'}>
                    <Grid item xs={12} md={2}>
                        <Typography>نام کوییز را انتخاب کنید</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextInput errorText={'وارد کردن نام کوییز اجباری می باشد'} label={'نام کوییز'}
                                   name={'quiz-name'}/>
                    </Grid>
                    {[...Array(questionNumber)].map((n, i) => {
                        return <QuestionInput key={i} index={i + 1}/>
                    })}
                    <Grid item xs={12} md={'auto'} gap={1} sx={{display: 'flex'}}>
                        <Button sx={{width: {md: 'auto', xs: '100%'}}} type={'submit'} variant={'outlined'}>ثبت
                            کوییز</Button>
                        <Button onClick={addQuestion} size={'small'}
                                sx={{width: {md: 'auto', xs: '100%'}}} variant={'outlined'}>اضافه
                            کردن</Button>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    )
}
export default QuizBuilder