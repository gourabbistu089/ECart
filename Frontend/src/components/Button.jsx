import React from 'react'

function Button({text, bgcolor, color, handler =()=>{}}) {
  return (
    <button className={`${bgcolor} ${color} px-4 py-2  cursor-pointer hover:scale-105 transition-all duration-300 relative rounded-full z-10 font-semibold`} onClick={handler}>
       { text}
    </button>
  )
}

export default Button