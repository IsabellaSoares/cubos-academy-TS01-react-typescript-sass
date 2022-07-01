import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

const ConfirmModal = ({ open, handleClose, handleConfirm }: Props) => (
  <>
    {open && (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h2>Deseja excluir esse produto?</h2>

          <div className={styles.containerButtons}>
            <button className="btn-blue" onClick={handleConfirm}>
              Sim
            </button>
            <button className="btn-white" onClick={handleClose}>
              Não
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);

export default ConfirmModal;
