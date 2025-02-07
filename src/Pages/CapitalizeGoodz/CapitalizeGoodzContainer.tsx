import React, { useEffect } from 'react'
import CapitalizeGoodz from './CapitalizeGoodz'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { deleteOrderById, selectCapitalizeGoodz } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice';
import { showModal } from '../../store/modalAppSlice/modalAppSlice';

const ComingContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const capitalizeGoodzList = useAppSelector(selectCapitalizeGoodz);
  useEffect(() => {
    console.log('ComingContainer mounted', capitalizeGoodzList)
    // dispatch
    return () => {
      console.log('ComingContainer unmounted')
    }
  })

  const handleDeleteOrderById = ({ id, content }: { id: number, content: React.ReactNode | string }) => {
    dispatch(showModal({
      show: true,
      title: 'Вы уверены, что хотите удалить этот приход',
      desc: content,
      apply: 'Удалить',
      action: () => {
        dispatch(deleteOrderById({ id }))
      }
    }))
  }

  return (
    <CapitalizeGoodz
      capitalizeGoodzList={capitalizeGoodzList}
      handleDeleteOrderById={handleDeleteOrderById}
    />
  )
}

export default ComingContainer