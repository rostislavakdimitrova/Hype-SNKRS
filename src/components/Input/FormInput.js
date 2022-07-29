import { useState } from 'react';
import './FormInput.module.css';


export const FormInput = (props) => {
    const [ focused, setFocused ] = useState(false);

    const { label, icon, errorMessage, onChange, id, ...inputProps } = props;

    const focusHandler = (e) => {
        setFocused(true);
    }; 

    return (
        <div className="formInput">
            <label>{label}</label>
            <i>{icon}</i>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={focusHandler}
                onFocus={() => inputProps.name === 'confirmPass' && setFocused(true)}
                focused={focused.toString()}
            />
            <p className="error">{errorMessage}</p>
        </div>
    );
};