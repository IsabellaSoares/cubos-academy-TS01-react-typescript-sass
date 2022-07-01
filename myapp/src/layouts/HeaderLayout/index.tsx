import { Outlet } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";
import { Header } from "../../components/Header";
import useGlobalContext from "../../hooks/useGlobalContext";
import styles from "./styles.module.scss";

const HeaderLayout = () => {
  const { handleConfirmModal, openModal, handleCloseModal } =
    useGlobalContext();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.contentPage}>
        <h1>Loja do Dani</h1>
        <Outlet />
      </main>

      <ConfirmModal
        open={openModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
      />
    </div>
  );
}

export default HeaderLayout;
