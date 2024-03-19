import {useSelector} from "react-redux";
import Link from "next/link";

import { YMaps, Map } from '@pbe/react-yandex-maps';

import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Styles from './css/footer-section.module.scss'

const FooterSection = () => {
    const data = useSelector((state) => state.data.navItems)

    return(
        <footer className={Styles.footerSection}>
            <nav>
                <h4 className={Styles.navTitle}>Навигация</h4>
                <ul>
                    {data.map(({id,title,href}) => {
                        return(
                            <li key={id}><Link href={href}>{title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
            <nav>
               <h4 className={Styles.navTitle}>Контакты</h4>
                <ul>
                    <li>
                        <FaPhone/>
                        +7 705 392 61 45
                    </li>
                    <li>
                        <FaPhone/>
                        +7 705 392 61 45
                    </li>
                </ul>
                <h4 className={Styles.navTitle}>Адрес</h4>
                <ul>
                    <li>
                        <FaLocationDot/>
                        г. Актобе, 41 разъезд, товарный двор 602А, офис 3
                    </li>
                </ul>
            </nav>
            <YMaps>
                <div>
                    <Map width={510} height={215} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </YMaps>
        </footer>
    )
}
export default FooterSection