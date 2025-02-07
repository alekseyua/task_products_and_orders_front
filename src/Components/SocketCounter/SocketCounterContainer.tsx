import React, { useEffect } from 'react'
import SocketCounter from './SocketCounter'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDataIoAsync, selectCount } from '../../store/counterSocket/counterSocketSlice';
import { io } from 'socket.io-client';


const SocketCounterContainer: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  
  
  useEffect(() => {
    const socket = io("http://localhost:5001");
    socket.on("updateSessionCount", (count: number) => {
      dispatch(getDataIoAsync(count));
    });


    return () => {
      socket.off("updateSessionCount");
    };
  }, []);

console.log({count})
  return (
    <SocketCounter
      count={count}
    />
  )
}

export default SocketCounterContainer