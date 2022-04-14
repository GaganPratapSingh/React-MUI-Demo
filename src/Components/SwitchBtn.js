import { Switch } from "@material-ui/core";

function switchBtn(){
    const funCall=(e,val)=>{
        console.log(val);
    }
    return (
        <>
        <Switch color="primary" size="large"
        onChange={funCall}
        />
        </>
    )
}
export default switchBtn;