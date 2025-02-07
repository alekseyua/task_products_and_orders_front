import React from 'react'

interface ISocketCounter {
      countComing: number;
}
const SocketCounter: React.FC<ISocketCounter> = ({ countComing }: ISocketCounter) => {
  return (
      <div>{countComing} screen</div>
  )
}

export default SocketCounter