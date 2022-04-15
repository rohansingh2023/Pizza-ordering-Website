import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Select from the variety of delicious pizza. Have a go at every flavour
        and let us know about your experience.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <ProductCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
