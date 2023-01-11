import { fireEvent, render, screen } from '@testing-library/react';
import DataFetching from './DataFetching';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  render(
    <Router>
      <DataFetching />
    </Router>
  );

  const input = screen.getByTestId('searchBar') as HTMLInputElement;
  expect(input).toBeInTheDocument();
});

it('updates on change', () => {
  render(
    <Router>
      <DataFetching />
    </Router>
  );
  const input = screen.getByTestId('searchBar') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'hello world' } });
  expect(input.value).toBe('hello world');
});
