import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function Onedate(props){
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });


    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
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