import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

const HeaderLayout = () => (
  <>
    <Header />
    <div className={styles.contentPage}>
      <h1>Nome da Loja</h1>
      <Outlet /> 
    </div>
  </>
);

export default HeaderLayout;
