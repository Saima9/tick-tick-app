/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DatePicker component', () => {
  render(<App />);
  
  // Check if the DatePicker component is rendered
  const datePickerElement = screen.getByText(/date picker/i);
  expect(datePickerElement).toBeInTheDocument();
});
