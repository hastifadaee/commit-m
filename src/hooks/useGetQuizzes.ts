import {useEffect, useState} from "react";
import {QuizType, QuizzesType} from "../types/commonTypes";

export const useGetQuizzes = (quizName ?: string)=>{
    const [quizzes, setQuizzes] = useState<QuizzesType>()
    const [oneQuiz , setOneQuiz] = useState<QuizType>()
    useEffect(() => {
        getQuiz()
    }, []);
    const getAllQuizzes = ()=>{
        const quizData = localStorage.getItem('Tests')
        const allQuizzes = quizData ? JSON.parse(quizData) : []
        setQuizzes(allQuizzes)
        return allQuizzes
    }
    const getOneQuiz = ()=>{
        const allQuizzes = getAllQuizzes()
        const quiz : QuizType = allQuizzes?.find((item:QuizType) => item.name === quizName)!
        setOneQuiz(quiz)
    }
    const getQuiz  = ()=>{
        if(quizName){
           getOneQuiz()
        }else {
            getAllQuizzes()
        }
    }
    return {quizzes , oneQuiz}
}
