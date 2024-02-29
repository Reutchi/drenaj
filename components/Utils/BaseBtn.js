import Styles from '../css/base-btn.module.scss'
const BaseBtn = ({title,className}) => {
   return(
       <button className={`${Styles[className]}`}>
           {title}
       </button>
   )
}

export default BaseBtn