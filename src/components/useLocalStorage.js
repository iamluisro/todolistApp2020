import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [items, setList] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      console.log("item: " + item);
      return item ? JSON.parse(item) : initialValue;
      debugger;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(items) : value;
      setList(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      debugger;
    } catch (error) {
      console.log(error);
    }
  };

  return [items, setValue];
}
