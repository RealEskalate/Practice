import { TextField } from "@mui/material"
import { useField } from "formik"

const TextfieldWrapper = ({name, label, type, ...otherProps}: {name: string, label: string, type?: string})=>{
    const [field, mata] = useField(name)

    const textfieldProps = {
        ...field,
        label,
        type,
        fullWidth: true,
        ...otherProps,
        error:false,
        helperText :"",
    }
    if (mata && mata.touched && mata.error) {
        textfieldProps.error = true;
        textfieldProps.helperText = mata.error;
      }


    return (
        <TextField {...textfieldProps}/>
    )
}

export default TextfieldWrapper