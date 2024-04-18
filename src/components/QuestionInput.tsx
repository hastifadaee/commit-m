import {Box, Grid, RadioGroup, Typography} from "@mui/material";
import TextInput from "./TextInput";
import AnswerChoiceInput from "./AnswerChoiceInput";
import {Control, FieldValues, useController, UseFormGetValues} from "react-hook-form";

const QuestionInput = ({index, control}: {
    index: number,
    control: Control,
}) => {
    const {field: radioField, fieldState: radioFieldState} = useController({
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
                        <TextInput control={control} name={`question_${index}`}/>
                    </Grid>
                    <AnswerChoiceInput control={control} number={1} name={`answer_${index}_1`}/>
                    <AnswerChoiceInput control={control} number={2} name={`answer_${index}_2`}/>
                    <AnswerChoiceInput control={control} number={3} name={`answer_${index}_3`}/>
                    <AnswerChoiceInput control={control} number={4} name={`answer_${index}_4`}/>
                </Grid>
            </RadioGroup>
        </Box>
    )
}
export default QuestionInput;