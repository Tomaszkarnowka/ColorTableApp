import { useState, useEffect } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import Products, { type Product } from './Products';
import ProductsPagination from './ProductsPagination';
import classes from './DataFetching.module.css';

const PRODUCTS_PER_PAGE = 5;
const API_URL = 'https://reqres.in/api';

const DataFetching = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(searchParams.get('id') ?? '');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const idParam = search ? `&id=${search}` : '';
        const res = await fetch(
          `${API_URL}/products?per_page=${PRODUCTS_PER_PAGE}&page=${currentPage}${idParam}`
        );
        const products = await res.json();
        setProducts(
          Array.isArray(products.data) ? products.data : [products.data]
        );

        setTotalPages(products.total_pages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, search]);

  //page change

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <h1>COLOR TABLE</h1>
        <input
          type="text"
          placeholder="Search"
          data-testid="searchBar"
          onChange={(e) => {
            setSearchParams(createSearchParams({ id: e.target.value }));
            setSearch(e.target.value);
          }}
          value={search}
          className={classes.searchTerm}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
      </div>

      <Products products={products} isLoading={loading} />
      <ProductsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={(pageNumber) => setCurrentPage(pageNumber)}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default DataFetching;
