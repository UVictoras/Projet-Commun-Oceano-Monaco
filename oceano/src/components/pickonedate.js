import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

function Onedate(props) { 
    console.log(props.value)
    const [value, setValue] = useState(
        {  
            startDate: props.value ? props.value : null, 
            endDate: null 
        }
    ); 

    const handleValueChange = (newValue) => {
        setValue(newValue); 
        if (props.onChange) {
            props.onChange(newValue);
        }
    } 

    return <Datepicker asSingle={true} value={value} onChange={handleValueChange} />

}; 
export default Onedate;