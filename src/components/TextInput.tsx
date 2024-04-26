import {TextField} from "@mui/material";
import {useController, useFormContext, ValidationRule} from "react-hook-form";
type TextInputTypes = { name: string, label?: string, errorText: string  , pattern?:ValidationRule<RegExp>}
const TextInput = ({name, label, errorText , pattern}: TextInputTypes) => {
    const {control} = useFormContext()
    const {field, fieldState} = useController({
        control,
        name: name,
        rules: {required: {value: true, message: errorText} , pattern:pattern}
    })
    return (<TextField helperText={fieldState?.error?.message} size={'small'} label={label} error={!!fieldState?.error}
                       fullWidth value={field.value ?? ''}
                       onChange={field.onChange}></TextField>)
}
export default TextInput;