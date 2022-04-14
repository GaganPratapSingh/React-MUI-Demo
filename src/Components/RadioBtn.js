
import { Radio } from '@material-ui/core';
import { useState } from 'react';

function RadioBtn() {

 const [gender,setGender]=useState("Male")

  function funCall(e){
    setGender(e.target.value);
  }
  return (
   <>
    <h3>Material Ui</h3>
    <div>
       <Radio  
       value='male'
       color='primary'
       checked={gender==='male'}
       onChange={funCall}
       />
      <span>Male</span>
    </div>
    <div>
       <Radio  
       value='female'
       color='primary'
       checked={gender==='female'}
       onChange={funCall}
       />
      <span>Female</span>
    </div>
    <div>
       <Radio  
       value='other'
       color='primary'
       checked={gender==='other'}
       onChange={funCall}
       />
      <span>Other</span>
    </div>
    
   </>
  );
}

export default RadioBtn;
