import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import ModalContentMap from "./ModalContentMap";
import { ModalOverlay, ModalContent, CloseButton } from "./Modal.styled";

const Modal = ({
  isOpen,
  onClose,
  type,
  data,
  refreshBooks,
  onConfirm,
  message,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const ModalContentComponent = ModalContentMap[type];
  if (!ModalContentComponent) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleClickOutside}>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContentComponent
          isbn={data?.isbn}
          currentBook={data}
          onClose={onClose}
          refreshBooks={refreshBooks}
          onConfirm={onConfirm}
          message={message}
        />
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
