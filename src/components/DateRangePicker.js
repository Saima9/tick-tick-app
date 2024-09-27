import React, { useContext } from 'react';
import DatePickerContext from '../context/DatePickerContext';

const DateRangePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DatePickerContext);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Start Date:</label>
      <input
        type="date"
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
        className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <label className="block text-sm font-medium text-gray-700 mt-4">End Date (optional):</label>
      <input
        type="date"
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
        className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default DateRangePicker;