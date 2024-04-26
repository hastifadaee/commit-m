import {InputValuesType, QuestionType, QuizType} from "../types/commonTypes";
import {useGetQuizzes} from "./useGetQuizzes";

export const useCreateQuiz = (questionNumber : number)=>{
    const {quizzes} = useGetQuizzes()
 const setNewQuiz = (res:InputValuesType)=> {
     const questions: QuestionType = [...Array(questionNumber)].map((n, i) => {
         const index = i + 1
         const question = {
             question: res[`question_${index}`],
             answers: [res[`answer_${index}_1`], res[`answer_${index}_2`], res[`answer_${index}_3`], res[`answer_${index}_4`]],
             correct: res[`radio_${index}`]
         }
         return({...question})
     })
     const newQuiz : QuizType = {questions: questions, name: res['quiz-name']}
     quizzes?.push(newQuiz)
     localStorage.setItem('Tests' , JSON.stringify(quizzes))
 }
 return{setNewQuiz}
}