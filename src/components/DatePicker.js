import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationOptions from './CustomizationOptions';
import CalendarPreview from './CalendarPreview';
import DateRangePicker from './DateRangePicker';

const DatePicker = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <CustomizationOptions />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;