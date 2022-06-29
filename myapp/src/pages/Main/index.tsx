import styles from "./styles.module.scss";

const Main = () => (
  <main className={styles.container}>
    <h2 className={styles.subtitle}>Seus produtos</h2>
    <button className="btn-blue">Adicionar produto</button>
  </main>
);

export default Main;
