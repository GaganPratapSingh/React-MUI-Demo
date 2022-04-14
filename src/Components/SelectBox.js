import { MenuItem, Select } from "@material-ui/core";
import { useState } from "react";

function SelectBox(){
    const[course,setCourse]=useState('');

    function funCall(e,val){
        return setCourse(e.target.value)
    }
    return(
        <>
        <div style={{margin:20}}>
        <Select
         value={course} 
         displayEmpty
         onChange={funCall}
         >
            <MenuItem value="">Select Course</MenuItem>
            <MenuItem value={1}>Node</MenuItem>
            <MenuItem value={2}>Java</MenuItem>
            <MenuItem value={3}>JavaScript</MenuItem>
            <MenuItem value={4}>C++</MenuItem>
        </Select>
        </div>
        </>
    )
}
export default SelectBox;