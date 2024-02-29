import Styles from '../css/mobile-menu.module.scss';

import {useDispatch, useSelector} from "react-redux";

import {toggleHambMenu} from "@/store/modules/data";

import Link from "next/link";

const MobileMenu = () => {
    const dispatch = useDispatch()
    const {hamburgerMenuOpen,navItems} = useSelector((state) => state.data)

    const handleOpenMenu = () => {
        dispatch(toggleHambMenu())
    }

    return (
        <>
            <div onClick={handleOpenMenu} className={`${Styles.hamburger} ${hamburgerMenuOpen ? Styles.open : ''}`}>
                <span className={Styles.hamburgerTop}></span>
                <span className={Styles.hamburgerMiddle}></span>
                <span className={Styles.hamburgerBottom}></span>
            </div>

            {hamburgerMenuOpen && (
                <nav className={hamburgerMenuOpen && Styles.menu }>
                    <ul className={Styles.menuItems}>
                        {navItems.map((i,idx) => (
                            <li key={idx}><Link href={i.href}>{i.title}</Link></li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default MobileMenu;
