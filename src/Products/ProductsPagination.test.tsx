import { fireEvent, render, screen } from '@testing-library/react';
import ProductsPagination from './ProductsPagination';
import '@testing-library/jest-dom';

const totalPages = 2;
const currentPage = 1;

it('renders prev button', () => {
  const paginateMock = jest.fn();
  const prevPageMock = jest.fn();
  const nextPageMock = jest.fn();
  render(
    <ProductsPagination
      totalPages={totalPages}
      currentPage={currentPage}
      paginate={paginateMock}
      prevPage={prevPageMock}
      nextPage={nextPageMock}
    />
  );

  const prevButton = screen.getByTestId('prev');
  expect(prevButton).toHaveTextContent('prev');
});
it('prev button', () => {
  const paginateMock = jest.fn();
  const prevPageMock = jest.fn();
  const nextPageMock = jest.fn();
  render(
    <ProductsPagination
      totalPages={totalPages}
      currentPage={currentPage}
      paginate={paginateMock}
      prevPage={prevPageMock}
      nextPage={nextPageMock}
    />
  );

  const prevBttn = screen.getByTestId('prev');
  fireEvent.click(prevBttn);
  expect(prevPageMock).toHaveBeenCalledTimes(1);
});

it('renders next button', () => {
  const paginateMock = jest.fn();
  const prevPageMock = jest.fn();
  const nextPageMock = jest.fn();
  render(
    <ProductsPagination
      totalPages={totalPages}
      currentPage={currentPage}
      paginate={paginateMock}
      prevPage={prevPageMock}
      nextPage={nextPageMock}
    />
  );

  const prevButton = screen.getByTestId('next');
  expect(prevButton).toHaveTextContent('next');
});
it('next button', () => {
  const paginateMock = jest.fn();
  const prevPageMock = jest.fn();
  const nextPageMock = jest.fn();
  render(
    <ProductsPagination
      totalPages={totalPages}
      currentPage={currentPage}
      paginate={paginateMock}
      prevPage={prevPageMock}
      nextPage={nextPageMock}
    />
  );

  const nextBttn = screen.getByTestId('next');
  fireEvent.click(nextBttn);
  expect(nextPageMock).toHaveBeenCalledTimes(1);
});
