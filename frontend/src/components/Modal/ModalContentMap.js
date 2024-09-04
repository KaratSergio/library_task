import EditBookForm from "../EditBookForm/EditBookForm";
import AddBookForm from "../AddBookForm/AddBookForm";
import ConfirmModal from "./ConfirmModal";

const ModalContentMap = {
  edit: EditBookForm,
  add: AddBookForm,
  confirm: ConfirmModal,
};

export default ModalContentMap;
