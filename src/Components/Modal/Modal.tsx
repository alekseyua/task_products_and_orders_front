import React from 'react'
import './styles/modal.scss';
import { Modal } from 'react-bootstrap';
import { IModalCustom } from '../../store/modalAppSlice/modalAppSlice';

interface IModal {
  modal: IModalCustom;
  handleCloseModal: any
}
const ModalCustom: React.FC<IModal> = ({ modal, handleCloseModal }: IModal) => {
  return (
    <Modal
      animation={true}
      show={modal.show}
      size='lg'
      centered={true}
    >
      <Modal.Header closeButton>
        <h5 className="modal-title">{modal.title}</h5>
        <button
          onClick={handleCloseModal}
          type="button" className="modal__close-icon" data-bs-dismiss="modal"></button>
      </Modal.Header>
      <Modal.Body>
        <p>{modal.desc}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleCloseModal}
          type="button" className="modal__close" data-bs-dismiss="modal">Отменить</button>
        <button
          type="button"
          className="modal__apply"
          onClick={() => {
            modal.action()
            handleCloseModal()
          }
          }
        >
          {modal.apply ?? 'ok'}</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCustom;