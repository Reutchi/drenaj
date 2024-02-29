import Styles from './css/info-section.module.scss'

import {BaseBtn,OrderForm} from './index'

const InfoCard = ({title = 'Лучшие решения для ремонтных работ вашего дома!',description = '10 лет на рынке!'}) => {
    return(
        <section className={Styles.infoSection}>
            <div className={Styles.infoSectionDescription}>
                <h1>{title}</h1>
                <p>{description}</p>
                <BaseBtn className='baseBtn' title='Посмотреть каталог'/>
            </div>
            <OrderForm/>
        </section>
    )
}
export default InfoCard