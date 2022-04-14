import { TextField } from "@material-ui/core";

const TextBox=()=>{

    const getData=(e)=>{
        return console.warn(e.taget.value)
    }
    return(
        <>
        <TextField
        label='enter name here'
        color="secondary"
        variant="outlined"
        onChange={getData}
        />
        </>
    )
}
export default TextBox;