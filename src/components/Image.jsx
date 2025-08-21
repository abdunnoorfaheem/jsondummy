import React from 'react';

const Image = ({imgSrc,className}) => {
  return (
    <>
      <img src={imgSrc} alt="" className={`${className}`} />
    </>
  )
}

export default Image
