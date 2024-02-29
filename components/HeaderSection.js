import  Styles from '@/components/css/header-section.module.scss'
const HeaderSection = ({children}) => {
    return(
        <header className={Styles.headerSection}>
            {children}
        </header>
    )
}
export default HeaderSection