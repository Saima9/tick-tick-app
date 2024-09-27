import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import DateRangePicker from '../components/DateRangePicker';

describe('DateRangePicker Component', () => {
  it('should render date inputs and allow date selection', () => {
    render(
      <DatePickerProvider>
        <DateRangePicker />
      </DatePickerProvider>
    );

    const startDateInput = screen.getByLabelText(/Start Date/i);
    expect(startDateInput).toBeInTheDocument();

    fireEvent.change(startDateInput, { target: { value: '2024-10-01' } });
    expect(startDateInput.value).toBe('2024-10-01');

    const endDateInput = screen.getByLabelText(/End Date/i);
    fireEvent.change(endDateInput, { target: { value: '2024-12-01' } });
    expect(endDateInput.value).toBe('2024-12-01');
  });
});