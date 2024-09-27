import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../context/DatePickerContext';
import RecurrenceOptions from '../components/RecurrenceOptions';

describe('RecurrenceOptions Component', () => {
  it('should render recurrence options and allow selection', () => {
    render(
      <DatePickerProvider>
        <RecurrenceOptions />
      </DatePickerProvider>
    );

    const selectElement = screen.getByLabelText(/Recurrence/i);
    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 'weekly' } });
    expect(selectElement.value).toBe('weekly');
  });
});
