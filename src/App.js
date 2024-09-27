import React from 'react';
import { DatePickerProvider } from './context/DatePickerContext';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <DatePickerProvider>
      <div className="container mx-auto p-5">
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
}

export default App;