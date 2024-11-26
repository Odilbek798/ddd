    import React from 'react'
    import s from './Header.module.scss'
    import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
        <nav className={s.nav}>
            <img className={s.burger} src="/burger.png" alt="" />
            <Link to={'/'} className={s.logo}>SHOP.CO</Link>

            <div className={s.menu}>
                <Link to={'/'}>Shop</Link>
                <Link to={'/'}>On sale</Link>
                <Link to={'/'}>New arivvals</Link>
                <Link to={'/'}>Brands</Link>
            </div>

            <input className={s.search} type="text" />

            <div className={s.box}>
                <img className={s.black} src="/Vector (18).png" alt="" />
                <img src="/icon-1 (2).svg" alt="" />
                <img src="/icon-2 (2).svg" alt="" />
            </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header