import React, { useContext } from 'react';
import DatePickerContext from '../context/DatePickerContext';

const options = ['daily', 'weekly', 'monthly', 'yearly'];

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(DatePickerContext);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Recurrence:</label>
      <select
        className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;