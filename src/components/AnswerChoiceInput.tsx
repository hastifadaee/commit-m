import {Grid, Radio, Typography} from "@mui/material";
import TextInput from "./TextInput";
type AnswerChoiceInputTypes = {number:number , name:string}
const AnswerChoiceInput = ({number , name}:AnswerChoiceInputTypes)=>{
    return(
        <Grid item md={5.5} xs={12} display={'flex'} alignItems={'center'} gap={1}>
            <Typography>{number}.</Typography>
            <Radio value={number}/>
            <TextInput errorText={'وارد کردن گزینه اجباری می باشد'} name={name}/>
        </Grid>
    )
}
export default AnswerChoiceInput;