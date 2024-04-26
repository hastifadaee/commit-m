import {Box, Grid, RadioGroup, Typography} from "@mui/material";
import TextInput from "./TextInput";
import AnswerChoiceInput from "./AnswerChoiceInput";
import {useController, useFormContext} from "react-hook-form";

const QuestionInput = ({index}: {
    index: number
}) => {
    const {control} = useFormContext()
    const {field: radioField} = useController({
        control: control,
        name: `radio_${index}`,
        rules: {required: true}
    })
    return (
        <Box mt={5}>
            <RadioGroup
                name={`radio_${index}`}
                value={radioField.value ?? ''}
                onChange={radioField.onChange}
            >
                <Grid container justifyContent={'space-between'} alignItems={'center'} rowGap={3}>
                    <Grid item xs={1} >
                        <Typography>سوال {index} :</Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextInput errorText={'وارد کردن سوال اجباری می باشد'} name={`question_${index}`}/>
                    </Grid>
                    <AnswerChoiceInput number={1} name={`answer_${index}_1`}/>
                    <AnswerChoiceInput number={2} name={`answer_${index}_2`}/>
                    <AnswerChoiceInput number={3} name={`answer_${index}_3`}/>
                    <AnswerChoiceInput number={4} name={`answer_${index}_4`}/>
                </Grid>
            </RadioGroup>
        </Box>
    )
}
export default QuestionInput;