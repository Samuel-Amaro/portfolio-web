//TODO: CONSTRUIR UM HOOK CUSTOMIZADO QUE OBTENHA E ATUALIZE DADOS DO THEME SELECIONADO

import { useEffect, useState } from "react";

function getValue(key, initialValue) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(getValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
}