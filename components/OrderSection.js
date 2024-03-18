import BaseForm from "@/components/Utils/BaseForm";

import Image from 'next/image'

import Styles from './css/order-section.module.scss'
import {BaseBtn} from "@/components/index";
const OrderSection = ({title = 'Оставьте вашу заявку',description = "Заполните форму и мы перезвоним вам для консультации"}) => {
    return(
        <section id='order' className={Styles.orderSection}>
            <div className={Styles.wrapperOrder}>
                <h3>{title}</h3>
                <p>{description}</p>
                <BaseForm/>
            </div>
            <div className={Styles.vl}></div>
            <div className={Styles.order}>
                <div className={Styles.wrapperOffer}>
                    <Image
                        src="/offerimg.png"
                        width={555}
                        height={287}
                        alt="Offer Image"
                    />
                    <h2>Сделайте заказ до 2 февраля и получите скидку -10%</h2>
                </div>
                <div className={Styles.btnWrapper}>
                    <BaseBtn className='baseBtn' title='Скачать прайс-лист'/>
                </div>
            </div>
        </section>
    )
}
export default OrderSection