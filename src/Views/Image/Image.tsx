import React from 'react'


interface IImage {
    src: string;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
}
const Image: React.FC<IImage> = ({
    src,
    alt='pic',
    className='',
    width='',
    height='',
    style
}:IImage) => {
  return (
    <img style={style} src={src} alt={alt} className={className} height={height} width={width}/>
  )
}

export default Image