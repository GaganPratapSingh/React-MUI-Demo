import { Slider } from "@material-ui/core";
import { useState } from "react";

function RangeSlider() {
    const [val, setVal] = useState([40, 100])

    const updateVal = (e, val) => {
        return setVal(val)
    }

    const mark = [
        {
            value: 0,
            label: 0
        },
        {
            value: 40,
            label: 100
        },
        {
            value: 80,
            label: 200
        },
        {
            value: 120,
            label: 500
        },
        {
            value: 160,
            label: 1000
        },
        {
            value: 200,
            label: 5000,
        }
    ]
    return (
        <>
            <div style={{ width: 200, margin: 20 }}>
                <Slider
                    color='secondary'
                    value={val}
                    max={200}
                    onChange={updateVal}
                    marks={mark}
                    valueLabelDisplay='auto'
                />
            </div>
        </>
    );
}
export default RangeSlider;