import {WorkCarousel, SectionName} from './index'

import Styles from './css/our-work-section.module.scss'


const OurWorkSection = () => {
    return(
     <section className={Styles.ourWorkSection}>
         <SectionName sectionName={'Наши Работы'}/>
         <WorkCarousel/>
     </section>
    )
}
export default OurWorkSection
