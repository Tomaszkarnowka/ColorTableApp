import classes from './Products.module.css';

export type Product = {
  color: string;
  id: number;
  name: string;
  year: number;
};

type Props = {
  products: Product[];
  isLoading?: boolean;
};

const Products = ({ products, isLoading = false }: Props) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <table className={classes.table_fill}>
        <thead>
          <tr>
            <th className={classes.text_left}>ID</th>
            <th className={classes.text_left}>NAME</th>
            <th className={classes.text_left}>YEAR</th>
          </tr>
        </thead>
        <tbody className={classes.table_hover}>
          {products.map(({ id, color, name, year }) => {
            return (
              <tr
                key={id}
                style={{ backgroundColor: color }}
                data-testid="product"
              >
                <td className={classes.text_left} data-testid="id">
                  {id}
                </td>
                <td className={classes.text_left} data-testid="name">
                  {name}
                </td>
                <td className={classes.text_left} data-testid="year">
                  {year}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
