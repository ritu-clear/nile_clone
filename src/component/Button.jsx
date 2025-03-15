import React from 'react'
import PropTypes from "prop-types";
import Link from "next/link";
// function Button(props) {
//   const {children , style}  = props
//   return (
//     <div>
//       <button style={style ? style : {color: white, backgroundColor: '#ff0092',   }}>{children}</button>
//     </div>
//   )
// }

// export default Button





const Button = ({ type , text }) => {

  const buttonTypes = {
    primary:
        " text-base xl:text-lg font-bold !leading-tight epilogue ",
    "primary-pink-transparent":
        " text-base xl:text-lg font-bold !leading-tight epilogue bg-[#ff0092] text-[white] whitespace-nowrap border-2  py-4 xl:py-5 px-6 xl:px-8 rounded-[10px] ",
    "primary-transparent":
        "text-base xl:text-lg font-bold !leading-tight epilogue bg-transparent text-white whitespace-nowrap border-2 border-white py-4 xl:py-5 px-6 xl:px-8 rounded-[10px]",
    secondary:
        "text-base xl:text-lg font-bold text-black !leading-tight epilogue pr-9 ",
    "secondary-white":
        "text-base xl:text-lg font-bold text-white !leading-tight epilogue pr-9 "
};
  return (
   
     <button className={`${buttonTypes[type]}`} > {text}  </button> 
 
  )
}

export default Button
