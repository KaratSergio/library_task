import {
  ConfirmButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./Modal.styled";

const ConfirmModal = ({ message, onConfirm, onClose }) => (
  <div>
    <p>{message}</p>
    <ConfirmButtonContainer>
      <ConfirmButton
        onClick={() => {
          onConfirm();
          onClose();
        }}
      >
        Yes
      </ConfirmButton>
      <CancelButton onClick={onClose}>No</CancelButton>
    </ConfirmButtonContainer>
  </div>
);

export default ConfirmModal;
