import BaseInput from "@/components/Utils/BaseInput";

import {useState} from "react";

import Styles from '../css/base-form.module.scss'
import CustomBtn from "@/components/Utils/CustomBtn";
const BaseForm = () => {

    const [form,setForm] = useState({name:'',phone:'',textarea:''})
    const handleInput = ({key,value}) => {
        setForm(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleSubmit = (ev) => {
        ev.preventDefault() 
    }
    
    return(
        <form className={Styles.baseForm} onSubmit={ev => handleSubmit(ev)}>
            <BaseInput name='name' onInput={handleInput} type='name' placeholder='Ваше имя'/>
            <BaseInput name='phone' onInput={handleInput}  type='tel' placeholder='Ваш номер телефона'/>
            <BaseInput name='textarea' textarea onInput={handleInput}  placeholder='Дополнительный комментарий'/>
            <CustomBtn/>
        </form>
    )
}
export default BaseForm