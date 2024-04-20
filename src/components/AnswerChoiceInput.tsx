import {Grid, Radio, Typography} from "@mui/material";
import {Control} from "react-hook-form";
import TextInput from "./TextInput";

const AnswerChoiceInput = ({number , name}:{number:number , name:string})=>{
    return(
        <Grid item md={5.5} xs={12} display={'flex'} alignItems={'center'} gap={1}>
            <Typography>{number}.</Typography>
            <Radio value={number}/>
            <TextInput errorText={'وارد کردن گزینه اجباری می باشد'} name={name}/>
        </Grid>
    )
}
export default AnswerChoiceInput;