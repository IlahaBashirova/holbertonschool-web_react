import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Basic Tests', () => {
  test('renders h1 with "School dashboard"', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
  });

  test('renders correct text in body and footer', () => {
    render(<App />);

    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/copyright 2020 - holberton school/i)
    ).toBeInTheDocument();
  });

  test('renders an image', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });
});
