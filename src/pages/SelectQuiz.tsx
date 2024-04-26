import {Box, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {QuizType} from "../types/commonTypes";
import {useGetQuizzes} from "../hooks/useGetQuizzes";


const SelectQuiz = () => {
    const {quizzes} = useGetQuizzes()
    return (
        <>
            {
                !quizzes?.length ? <Box m={'auto'} width={'100%'} height={'400px'} alignItems={'center'} display={'flex'} justifyContent={'center'}><Typography>هیچ کوییزی ثبت نشده است !</Typography></Box>:
                    <Container>
                        <Grid container display={'flex'} gap={1} rowGap={2} sx={{justifyContent:'space-between'}}>
                            {
                                quizzes?.map((quiz:QuizType,index:number) => {
                                    return (
                                        <Grid item xs={5.5} md={2.5} key={index} sx={{ border: '3px solid #A1BCD7', borderRadius: 2}}>
                                            <Link to={`/test/${quiz.name}`}>
                                                <Box sx={{display: 'flex' , justifyContent:'space-between' , p:2}}>
                                                    <Typography>نام کوییز:</Typography>
                                                    <Typography>{quiz.name}</Typography>
                                                </Box>
                                                <Box sx={{display: 'flex' , justifyContent:'space-between' , p:2}}>
                                                    <Typography>تعداد سوالات کوییز:</Typography>
                                                    <Typography>{quiz?.questions?.length}</Typography>
                                                </Box>
                                            </Link>
                                        </Grid>

                                    )
                                })
                            }
                        </Grid>
                    </Container>
            }
        </>
    )
}
export default SelectQuiz;