import React, { useContext } from 'react';
import DatePickerContext from '../context/DatePickerContext';

const CustomizationOptions = () => {
  const { recurrence, customOptions, setCustomOptions } = useContext(DatePickerContext);

  const handleInputChange = (e) => {
    setCustomOptions({
      ...customOptions,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-6">
      {recurrence === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Days of the Week:</label>
          <div className="flex items-center space-x-2 mt-2">
            {/* Example checkboxes for selecting specific days */}
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Mon</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Tue</span>
            </label>
            {/* Add the rest of the days */}
          </div>
        </div>
      )}
      {recurrence === 'monthly' && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Nth Day of the Month:</label>
          <input
            type="number"
            name="nthDay"
            value={customOptions.nthDay || ''}
            onChange={handleInputChange}
            className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      )}
      {/* Other customization options as required */}
    </div>
  );
};

export default CustomizationOptions;