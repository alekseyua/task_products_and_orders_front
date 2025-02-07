import React, { useState } from 'react'
import Products from './Products'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteProductById, selectCapitalizeGoodz, selectListTypeProducts, selectProductsList } from '../../store/capitalizedGoodsApiSlice/capitalizedGoodsApiSlice';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { closeModal, showModal } from '../../store/modalAppSlice/modalAppSlice';

const ProductsContainer: React.FC = () => {
  const capitalizeGoodzList = useAppSelector(selectCapitalizeGoodz);
  const [productsList, setProductsList] = useState(useAppSelector(state => selectProductsList(state, {})));
  const typeProductsList = useAppSelector(selectListTypeProducts);
  const state = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const handleSelectTypeProducts = (type: string | undefined) => {
    setProductsList(selectProductsList(state, { type }))
  }

  const handleDeleteProduct = ({ id, content }: { id: number, content: React.ReactNode | string }) => {
    dispatch(showModal({
      show: true,
      title: 'Вы уверены, что хотите удалить этот продукт',
      desc: content,
      apply: 'Удалить',
      action: () => {
        dispatch(deleteProductById({ id }))
        dispatch(closeModal())
      }
    }))
  }

  React.useEffect(() => {
    setProductsList(selectProductsList(state, {}))
  }, [capitalizeGoodzList, typeProductsList])

  return (
    <Products
      productsList={productsList}
      typeProductsList={typeProductsList}
      capitalizeGoodzList={capitalizeGoodzList}
      handleDeleteProduct={handleDeleteProduct}
      handleSelectTypeProducts={handleSelectTypeProducts}
    />
  )
}

export default ProductsContainer