import {TextField} from "@mui/material";
import {Control, useController} from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const TextInput = ({control , name , label}:{control:Control , name:string , label?:string})=>{
    const {field , fieldState} = useController({control, name:name, rules:{required: {value:true , message:'hi'}}})
    return(
        <TextField helperText={!!fieldState?.error?.message} size={'small'} label={label} error={!!fieldState?.error} fullWidth value={field.value ??''}
                   onChange={field.onChange}></TextField>
    )
}
export default TextInput;