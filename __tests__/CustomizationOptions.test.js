import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import CustomizationOptions from '../components/CustomizationOptions';

describe('CustomizationOptions Component', () => {
  it('should render specific inputs for "monthly" recurrence', () => {
    render(
      <DatePickerProvider>
        <CustomizationOptions />
      </DatePickerProvider>
    );

    // Simulate selecting the "monthly" recurrence
    fireEvent.change(screen.getByLabelText(/Recurrence/i), { target: { value: 'monthly' } });

    const nthDayInput = screen.getByLabelText(/Nth Day of the Month/i);
    expect(nthDayInput).toBeInTheDocument();

    fireEvent.change(nthDayInput, { target: { value: 5 } });
    expect(nthDayInput.value).toBe('5');
  });
});