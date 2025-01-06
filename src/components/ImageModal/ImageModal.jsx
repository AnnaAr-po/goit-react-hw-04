import Modal from 'react-modal';
import css from "./ImageModal.module.css"

const ImageModal = ({ isOpen, onClose, image }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={closeModal}
      className={css.modal} 
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      ariaHideApp={false} 
    >
      <div className={css.modal_content} onClick={closeModal}>
        <img
          className={css.img} src={image?.urls?.regular} 
          alt={image?.alt_description} 
        />
        <p style={{ textAlign: "center" }}>
          {image ? image.alt_description : ""}{" "}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
