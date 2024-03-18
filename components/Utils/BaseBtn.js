import Styles from '../css/base-btn.module.scss'
const BaseBtn = ({title,className, style,type}) => {
   return(
       <button type={type} style={{color:`${style}`}} className={`${Styles[className]}`}>
           {title}
       </button>
   )
}

export default BaseBtn