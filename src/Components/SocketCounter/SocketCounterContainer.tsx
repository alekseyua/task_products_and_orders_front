import React, { useEffect } from 'react'
import SocketCounter from './SocketCounter'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDataIoAsync, selectCount } from '../../store/counterSocket/counterSocketSlice';

const SocketCounterContainer: React.FC = () => {
  const countComing = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataIoAsync())
  }, [])
  return (
    <SocketCounter
      countComing={countComing}
    />
  )
}

export default SocketCounterContainer