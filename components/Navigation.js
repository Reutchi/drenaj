import Styles from './css/navigation.module.scss'

import {useSelector} from 'react-redux'

import {MobileMenu} from './index'
import Link from "next/link";

const Navigation = () => {

    const navItems = useSelector((state) => state.data.navItems)

    return(
       <nav className={Styles.navigation}>
           <div>
               <Link className={Styles.logo} href={'/'}>LOGO</Link>
           </div>
           <ul className={Styles.navigationItems}>
               {navItems.map(({id,title,href}) => <li key={title}><Link href={href}>{title}</Link></li>)}
           </ul>
           <div className={Styles.contact}>
               <Link href="/">Связаться сейчас</Link>
           </div>
           <MobileMenu/>
       </nav>
    )
}
export default Navigation