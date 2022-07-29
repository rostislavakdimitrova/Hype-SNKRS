import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [ value, setValue ] = useState(() => {
        //const storedData = localStorage.getItem(key);

        //return storedData ? JSON.parse(storedData) : defaultValue;
        return getLocalStorageValue(key, defaultValue);
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }
    return [
        value,
        setLocalStorageValue
    ];
};

const getLocalStorageValue = (key, defaultValue) => {
    const savedData = localStorage.getItem(key);
    
    return savedData ? JSON.parse(savedData) : defaultValue;
};