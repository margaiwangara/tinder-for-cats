import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage(key: string, initialValue: any = null) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const initialize = (key: string) => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);

      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(null);

  useEffect(() => {
    setStoredValue(initialize(key));
  }, []);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: any) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    },
    [key, setStoredValue],
  );

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  // Return a tuple that also includes the persistence setter function
  // Note: this is the "official" return value of a custom hook, only!
  // The return value can be destructured, spread, and handed directly to useState

  return [storedValue, setValue, remove];
}
