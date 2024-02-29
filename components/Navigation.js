import Styles from './css/navigation.module.scss'

import {useSelector} from 'react-redux'

import {MobileMenu} from './index'

const Navigation = () => {

    const navItems = useSelector((state) => state.data.navItems)

    return(
       <nav className={Styles.navigation}>
           <div>
               <p>LOGO</p>
           </div>
           <ul className={Styles.navigationItems}>
               {navItems.map(({id,title,href}) => <li key={id}><a href={href}>{title}</a></li>)}
           </ul>
           <div className={Styles.contact}>
               <a href="/">Связаться сейчас</a>
           </div>
           <MobileMenu/>
       </nav>
    )
}
export default Navigation