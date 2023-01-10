import { render, screen } from '@testing-library/react';
import Products from './Products';
import '@testing-library/jest-dom';

it('renders loader', () => {
  const { container } = render(<Products products={[]} isLoading />);

  expect(container).toHaveTextContent('Loading...');
});
const PRODUCTS = [
  {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
  },
  {
    id: 2,
    name: 'fuchsia rose',
    year: 2001,
    color: '#C74375',
  },
  {
    id: 3,
    name: 'true red',
    year: 2002,
    color: '#BF1932',
  },
];

it('renders products', () => {
  render(<Products products={PRODUCTS} />);

  const productComponents = screen.getAllByTestId('product');
  expect(productComponents.length).toBe(3);
});

const PRODUCT = [
  {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
  },
];

it('renders correct values', () => {
  render(<Products products={PRODUCT} />);

  const id = screen.getByTestId('id');
  expect(id).toHaveTextContent('1');

  const name = screen.getByTestId('name');
  expect(name).toHaveTextContent('cerulean');

  const year = screen.getByTestId('year');
  expect(year).toHaveTextContent('2000');
});

it('renders correct background color', () => {
  render(<Products products={PRODUCT} />);

  const backgroundColor = screen.getByTestId('product');
  expect(backgroundColor).toHaveStyle('background-color: #98B2D1');
});
