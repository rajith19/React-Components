import React from 'react'

interface ButtonProps {
    onClick : () => void,
    textVal : string
}

const Button: React.FC<ButtonProps> = ({onClick, textVal}) => {
  return (
    <><button onClick={onClick} style={{margin : "20px 10px", border : "1px solid #000"}}>{textVal}</button></>
  )
}

export default Button