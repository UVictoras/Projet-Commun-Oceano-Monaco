import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Onedate = (contentPlaceHolder) => {
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
            placeholder={contentPlaceHolder} 
            asSingle={true}
            value={value}
            onChange={handleValueChange}
        />
    );
};
export default Onedate;