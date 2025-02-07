import React from 'react'
import ModalCustom from './Modal'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeModal, selectModalState } from '../../store/modalAppSlice/modalAppSlice'

const ModalContainer: React.FC = () => {
  const modal = useAppSelector(selectModalState);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => dispatch(closeModal());

  return (
    <ModalCustom
      modal={modal}
      handleCloseModal={handleCloseModal}
    />
  )
}

export default ModalContainer