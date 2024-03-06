import  Styles from '@/components/css/header-section.module.scss'

import Polygon from '../public/Polygon.png'

import Image from 'next/image'



const HeaderSection = ({children}) => {
    return(
        <header className={Styles.headerSection}>
            {children}
            <Image
                className={Styles.icon}
                src={Polygon}
                alt="Icon Polygon"
            />
        </header>
    )
}
export default HeaderSection