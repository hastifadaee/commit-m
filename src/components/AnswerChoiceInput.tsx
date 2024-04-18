import {Grid, Radio, Typography} from "@mui/material";
import {Control} from "react-hook-form";
import TextInput from "./TextInput";

const AnswerChoiceInput = ({control , number , name}:{ control:Control , number:number , name:string})=>{
    return(
        <Grid item md={5.5} xs={12} display={'flex'} alignItems={'center'} gap={1}>
            <Typography>{number}.</Typography>
            <Radio value={number}/>
            <TextInput control={control} name={name}/>
        </Grid>
    )
}
export default AnswerChoiceInput;