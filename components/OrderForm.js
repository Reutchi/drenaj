import Styles from './css/order-form.module.scss'

import {BaseBtn} from './index'
const OrderForm = () => {
    return(
        <div className={Styles.orderFormWrapper}>
            <form className={Styles.orderForm}>
                <h3>Оставьте вашу заявку</h3>
                <p>Заполните форму и мы перезвоним!</p>
                <label>
                    <input  placeholder='Ваше имя' required type="text"/> <br/>
                </label>
                <labe>
                    <input placeholder='Ваш номер телефона' type="tel" id="phone" name="phone" required /> <br/>
                </labe>
                <BaseBtn className='sendBtn' title='Отправить'/>
            </form>
        </div>
    )
}
export default OrderForm
