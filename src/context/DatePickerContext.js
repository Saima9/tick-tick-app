import React, { createContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('daily');
  const [customOptions, setCustomOptions] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const value = {
    recurrence,
    setRecurrence,
    customOptions,
    setCustomOptions,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default DatePickerContext;