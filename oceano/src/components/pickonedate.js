import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const Onedate = () => { 
const [value, setValue] = useState({ 
startDate: null, 
endDate: null 
}); 

const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 
} 

return (
<Datepicker class=" bg-gray-300 " 
asSingle={true} 
value={value} 
onChange={handleValueChange} 
/> 
);
}; 
export default Onedate;