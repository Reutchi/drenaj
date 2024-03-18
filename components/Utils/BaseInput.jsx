import Styles from '../css/base-input.module.scss'
const BaseInput = ({type, placeholder,onInput,id,name,value,textarea}) => {
    const handleInput = (value) => {
        onInput({key: name,value})
    }
    return(
        <label className={Styles.baseInput} htmlFor={id || name}>
            {
                !textarea && (
                    <input
                        id={id || name}
                        placeholder={placeholder}
                        onInput={ev => handleInput(ev.target.value)}
                        type={type}
                        value={value}
                    />
                )
            }
            {
                textarea && (
                    <textarea
                        placeholder={placeholder}
                        onInput={ev => handleInput(ev.target.value)}
                        value={value}
                        id={id || name }
                        cols="30" rows="10"
                    >
                        {value}
                    </textarea>
                )
            }
        </label>
    )
}
export default BaseInput