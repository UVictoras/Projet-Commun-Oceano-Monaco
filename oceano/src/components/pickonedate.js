import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function Onedate(props){
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });


    const handleValueChange = (newValue) => {
        setValue(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    }

    return (
        <Datepicker
            placeholder={props.contentPlaceHolder} 
            asSingle={true}
            value={value}
            onChange={handleValueChange}
        />
    );
};
export default Onedate;