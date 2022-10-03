import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page with title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Movie Title Auto-Complete/i);
  expect(titleElement).toBeInTheDocument();
});

test('it renders input field', () => {
  render(<App />);
  const inputElement = screen.getByTestId('autocomplete-input');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeVisible();
})
