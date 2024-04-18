import {Box, Container, Grid, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {QuizType, QuizzesType} from "../types/commonTypes";


const SelectQuiz = () => {
    const quizData = localStorage.getItem('Tests');
    const quizzes :QuizzesType = quizData ? JSON.parse(quizData) : []
    return (
        <>
            {
                !quizData ? <Box m={'auto'} width={'100%'} height={'400px'} alignItems={'center'} display={'flex'} justifyContent={'center'}><Typography>هیچ کوییزی ثبت نشده است !</Typography></Box>:
                    <Container>
                        <Grid container display={'flex'} gap={1} justifyContent={'space-between'}>
                            {
                                quizzes?.map((quiz,index:number) => {
                                    return (
                                        <Grid item xs={5.5} md={3} key={index} sx={{ border: '3px solid #A1BCD7', borderRadius: 2}}>
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