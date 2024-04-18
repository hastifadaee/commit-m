export type QuestionType = {question:string , answers:string[] , correct:string}[]
export type QuizType = {questions :QuestionType , name:string}
export type QuizzesType = QuizType[]