import { useEffect, useState } from "react";

function getValue(key: string, initialValue: any) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : initialValue;
}

export default function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(getValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}