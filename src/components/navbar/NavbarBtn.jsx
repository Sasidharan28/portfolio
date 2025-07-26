import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-500 border flex items-center gap-1 bg-gradient-to-r from-cyan-400 to bg-orange-400 hover:shadow hover:border-orange-400 hover:scale-110 transition-all duration-500'>Hire me <FiArrowDownRight /></button>
  )
}

export default NavbarBtn
