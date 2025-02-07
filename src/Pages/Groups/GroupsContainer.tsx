import React, { useEffect } from 'react'
import Groups from './Groups'
import { changeActiveOrder, closeActiveOrder, deleteProductById, selectCapitalizeGoodz } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showModal } from '../../store/modalAppSlice/modalAppSlice';

const GroupsContainer: React.FC = () => {
  const capitalizeGoodzList = useAppSelector(selectCapitalizeGoodz);
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-page-color', '#f0f3f5')
    return () => document.documentElement.style.setProperty('--bg-page-color', '#ffffff')
  }, [])

  const handleOrder = (id: number) => {
    dispatch(changeActiveOrder(id))
  }

  const handleDeleteOrderById = ({ id, content }: { id: number, content: React.ReactNode | string }) => {
    dispatch(showModal({
      show: true,
      title: 'Вы уверены, что хотите удалить этот продукт',
      desc: content,
      apply: 'Удалить',
      action: () => {
        dispatch(deleteProductById({ id }))
      }
    }))
  }

  const handleCloseListProducts = () => dispatch(closeActiveOrder())
  return (
    <Groups
      handleOrder={handleOrder}
      capitalizeGoodzList={capitalizeGoodzList}
      handleDeleteOrderById={handleDeleteOrderById}
      handleCloseListProducts={handleCloseListProducts}
    />
  )
}

export default GroupsContainer