import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

// const Onedate = () => { 
function Onedate(props) {
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
    }); 

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue);
        if (props.onChange) {
            props.onChange(newValue);
        }
    } 

    return <Datepicker asSingle={true} value={value} onChange={handleValueChange} /> 
}; 
export default Onedate;