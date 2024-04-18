import {Box, RadioGroup, Typography} from "@mui/material";
import AnswerChoice from "../AnswerChoice";
import {Control, useController} from "react-hook-form";

const Question = ({item , index , control} :{item : {question :string , answers:string[]},index:number , control:Control})=>{
    const {field , fieldState} = useController({control, name:`answer_${index}` , rules:{required:true}})
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