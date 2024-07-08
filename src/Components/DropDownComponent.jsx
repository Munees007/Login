import React ,{useState} from "react";
import "./DropDownComponent.css";
import './themes';


const DropDownComponent = ({options,onSelect,condition,theme}) => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
        onSelect(selectedOption); // Pass the selected value back to the parent component
    };
  return (
    <div className="drop-down">
     {condition === "Theme" ? <select value={selectedValue} className={`drop-down ${selectedValue !== '' ? "ace-"+selectedValue : "ace-twilight"}`} onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select> : 
            <select value={selectedValue} className={`drop-down ${theme !== '' ? "ace-"+theme : "ace-twilight"}`} onChange={handleChange}>
            <option value="">Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    }
    </div>
  );
};

export default DropDownComponent;
