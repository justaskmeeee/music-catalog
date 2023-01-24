import React from "react";
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <h1 className={s.title}>Музыкальный каталог</h1>  
    </header>
  )
}

export default Header;