import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC<{ text: string }> = ({ text }) => {
  const { pathname } = useLocation();
  return (
    <header className="relative w-full font-bold text-[36px] leading-[42px]">
      {text}
      <div className={`absolute ${pathname !== "/slaughter-shop" ? "bottom-0" : "bottom-[3px]"} left-0 w-full h-[1px] bg-black before:content-[''] before:block before:w-[100%] before:h-[1px] before:bg-black before:absolute before:bottom-0 before:left-0`} />
    </header>
  )
}

export default Header
