import "./Modal.css";

function Modal({ title, onTodoCancel, onTodoConfirm }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button onClick={onTodoCancel} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={onTodoConfirm} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;