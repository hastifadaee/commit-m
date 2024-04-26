import {Box, RadioGroup, Typography} from "@mui/material";
import AnswerChoice from "./AnswerChoice";
import {useController, useFormContext} from "react-hook-form";
type QuestionType = {item : {question :string , answers:string[]},index:number}
const Question = ({item , index} :QuestionType)=>{
    const {control} = useFormContext()
    const {field} = useController({control, name:`answer_${index}` , rules:{required:true}})
    return(
        <Box sx={{width:'100%'}} mb={2}>
            <Typography >سوال {index} : {item.question}</Typography>
            <RadioGroup
                name={`answer_${index}`}
                value={field.value ?? ''}
                onChange={field.onChange}
            >
                <AnswerChoice answers={item.answers}/>
            </RadioGroup>
        </Box>
    )
}
export default Question