import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import ProductCard from "../../components/ProductCard";

const Main = () => {
  const navigate = useNavigate();
  const { allProducts } = useGlobalContext();

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.subtitle}>Seus produtos</h2>
        <button className="btn-blue" onClick={() => navigate("/add-product")}>
          Adicionar produto
        </button>
      </div>

      <div className={styles.contentProducts}>
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
