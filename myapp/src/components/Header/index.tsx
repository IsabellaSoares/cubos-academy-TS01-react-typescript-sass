import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import Bag from "../../assets/bag.svg";

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={Bag} alt="Bag logo" />
      Market Cubos
    </Link>
  </header>
);
