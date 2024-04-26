import {Button, Grid, Typography} from "@mui/material";
import TextInput from "../TextInput";
import {FormProvider, UseFormReturn} from "react-hook-form";
type QuestionNumberGetterType = {form: UseFormReturn<{number: number}, any, undefined> , onSubmit:(arg:{number:number})=>void, addQuestion:()=>void}
const QuestionNumberGetter = ({form , onSubmit , addQuestion}:QuestionNumberGetterType)=>{

    return(
        <FormProvider {...form}>
            <Grid sx={{rowGap: 3}} container justifyContent={'space-between'} alignItems={'center'}
                  component={'form'} onSubmit={form.handleSubmit(onSubmit)}>
                <Grid item xs={12}>
                    <Typography>در صورت تمایل تعداد سوالات را وارد کنید در غیر این صورت سوالات
                        را تک به تک اضافه کنید</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                    <TextInput pattern={/^\d+$/} errorText={'وارد کردن عدد اجباری می باشد'} label={'تعداد سوالات'}
                               name={'number'}/>
                </Grid>
                <Grid item xs={12} md={'auto'} gap={1} sx={{display: 'flex'}}>
                    <Button size={'small'} sx={{width: {md: 'auto', xs: '100%'}}} variant={'outlined'}
                            type={'submit'}>ثبت</Button>
                    <Button onClick={addQuestion} size={'small'} sx={{width: {md: 'auto', xs: '100%'}}}
                            variant={'outlined'}>اضافه کردن</Button>
                </Grid>
            </Grid>
        </FormProvider>
    )
}
export default QuestionNumberGetter