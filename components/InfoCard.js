import Styles from './css/info-section.module.scss'

import {BaseBtn,OrderForm} from './index'

const InfoCard = () => {
    return(
        <section className={Styles.infoSection}>
            <div className={Styles.infoSectionDescription}>
                <h1>Лучшие решения для ремонтных работ вашего дома!</h1>
                <p>10 лет на рынке!</p>
                <BaseBtn className='baseBtn' title='Посмотреть каталог'/>
            </div>
            <OrderForm/>
        </section>
    )
}
export default InfoCard