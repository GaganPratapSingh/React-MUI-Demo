import RadioBtn from "./Components/RadioBtn";
import SliderBtn from "./Components/SliderBtn";
import RangeSlider from "./Components/RangeSlider"
import SelectBox from "./Components/SelectBox"
import TextBox from "./Components/TextBox";
import SwitchBtn from "./Components/SwitchBtn";
import BoxLayout from "./Components/BoxLayout";
import ContainerBox from "./Components/ContainerBox"
import GridLayout from "./Components/GridLayout";
import ContactForm from "./ContactComp.js/ContactUsForm";


function App(){
  return(
   <>
   <div style={{marginBottom:40, margiLeft:40}}>
    {/* <RadioBtn/>
    <SliderBtn/>
    <RangeSlider/>
    <SelectBox/>
    <TextBox/>
    <SwitchBtn/>
    <BoxLayout/>
    <ContainerBox />
    <GridLayout/> */}

    <ContactForm/>

    </div>
   </>
  )
}
export default App;