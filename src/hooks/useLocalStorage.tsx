import { useEffect, useState } from "react";

function getValue<Type>(key: string, initialValue: Type) {
  const jsonValue = localStorage.getItem(key);
  if (jsonValue === null) {
    return initialValue;
  } else {
    return JSON.parse(localStorage.getItem(key) as string) as Type;
  }
}

export default function useLocalStorage<Type>(key: string, initialValue: Type) {
  const [value, setValue] = useState<Type>(getValue<Type>(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [Type, typeof setValue];
}
