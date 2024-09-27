import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import DatePicker from '../components/DatePicker';

describe('DatePicker Integration Test', () => {
  it('should allow users to select recurrence, customize, and preview', () => {
    render(
      <DatePickerProvider>
        <DatePicker />
      </DatePickerProvider>
    );

    const recurrenceSelect = screen.getByLabelText(/Recurrence/i);
    fireEvent.change(recurrenceSelect, { target: { value: 'monthly' } });

    const nthDayInput = screen.getByLabelText(/Nth Day of the Month/i);
    fireEvent.change(nthDayInput, { target: { value: 10 } });
    expect(nthDayInput.value).toBe('10');

    const startDateInput = screen.getByLabelText(/Start Date/i);
    fireEvent.change(startDateInput, { target: { value: '2024-09-26' } });
    expect(startDateInput.value).toBe('2024-09-26');
  });
});