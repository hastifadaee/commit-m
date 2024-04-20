import {TextField} from "@mui/material";
import {Control, useController, useFormContext} from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const TextInput = ({name , label , errorText}:{name:string , label?:string , errorText:string})=>{
    const {control} = useFormContext()
    const {field , fieldState} = useController({control, name:name, rules:{required: {value:true , message:errorText}}})
    return(
        <TextField helperText={fieldState?.error?.message} size={'small'} label={label} error={!!fieldState?.error} fullWidth value={field.value ??''}
                   onChange={field.onChange}></TextField>
    )
}
export default TextInput;