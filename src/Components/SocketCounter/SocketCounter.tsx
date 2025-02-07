import React from 'react'

interface ISocketCounter {
      count: number;
}
const SocketCounter: React.FC<ISocketCounter> = ({ count }: ISocketCounter) => {
  return (
      <div>{count} screen</div>
  )
}

export default SocketCounter