import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

function Onedate(props) { 
    const [value, setValue] = useState(
        {  
            startDate: new Date(props.value), 
            endDate: new Date(props.value) 
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