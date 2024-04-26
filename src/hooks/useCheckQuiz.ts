import {InputValuesType, QuizType} from "../types/commonTypes";
import {useState} from "react";

export const useCheckQuiz = (quiz : QuizType|undefined)=>{
    const [falseAnswersCount , setFalseAnswersCount] = useState<undefined | number>(undefined)
    const checkAnswers = (answers:InputValuesType)=>{
        const correctAnswers = quiz?.questions.map((item)=>item.correct)
        const answer:string[] = []
        for (let answersKey in answers) {
            answer.push(answers[answersKey])
        }
        const correctness:boolean[] = []
        if(correctAnswers){
            for (let i = 0; i < answer.length; i++) {
                correctness.push(answer[i] === correctAnswers[i])
            }
            const falseAnswers = correctness.filter(item=>!item)
            setFalseAnswersCount(falseAnswers.length)
        }
    }
    return{falseAnswersCount , checkAnswers}
}