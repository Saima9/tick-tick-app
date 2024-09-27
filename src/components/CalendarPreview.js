import React, { useContext } from 'react';
import DatePickerContext from '../context/DatePickerContext';

const CalendarPreview = () => {
  const { recurrence, customOptions, startDate, endDate } = useContext(DatePickerContext);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900">Preview:</h3>
      <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-inner">
        {/* Here you would implement a mini-calendar for previewing */}
        {/* You can use libraries like react-calendar */}
        <p>{recurrence} recurrence with custom options</p>
        <p>Start Date: {startDate || 'Not selected'}</p>
        <p>End Date: {endDate || 'Not selected'}</p>
      </div>
    </div>
  );
};

export default CalendarPreview;