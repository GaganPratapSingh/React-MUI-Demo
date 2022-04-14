import { Slider } from "@material-ui/core";

const SliderBtn=()=>{
    const mark=[
        {
            value:0,
            label:'start'
        },
        {
            value:100,
            label:'mid'
        },
        {
            value:200,
            label:'top'
        },

    ]

    function funCalling(e,val){
        console.log(val);
    }
    return(
        <>
        <div style={{width:200, margin:20}}>
        <Slider
        color='secondary'
        defaultValue={100}
        valueLabelDisplay='auto'
        step={5}
        max={200}
        marks={mark}
        onChange={funCalling}
        />
        </div>

        <div style={{height:200, margin:20}}>
        <Slider
        color='primary'
        defaultValue={100}
        valueLabelDisplay='auto'
        step={5}
        max={200}
        marks={mark}
        onChange={funCalling}
        orientation='vertical'
        />
        </div>
        </>
    )
}
export default SliderBtn;