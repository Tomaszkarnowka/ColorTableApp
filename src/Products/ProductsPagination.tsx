import classes from './ProductsPagination.module.css';

type Props = {
  currentPage: number;
  nextPage: () => void;
  paginate: (pageNumber: number) => void;
  prevPage: () => void;
  totalPages: number;
};

const ProductsPagination = ({
  currentPage,
  nextPage,
  paginate,
  prevPage,
  totalPages,
}: Props) => {
  return (
    <div className={classes.pagination_wrapper}>
      <div className={classes.pagination}>
        <button
          className={`${classes.page_numbers} ${
            currentPage === 1 && classes.inactive
          }`}
          onClick={prevPage}
          data-testid="prev"
        >
          prev
        </button>

        {Array(totalPages)
          .fill(null)
          .map((_, id) => {
            const page: number = id + 1;
            return (
              <button
                key={`pagination-${page}`}
                onClick={() => paginate(page)}
                className={`${classes.page_numbers} ${
                  currentPage === page && classes.active
                }`}
              >
                {page}
              </button>
            );
          })}

        <button
          className={`${classes.page_numbers} ${
            currentPage === totalPages && classes.inactive
          }`}
          onClick={nextPage}
          data-testid="next"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ProductsPagination;
