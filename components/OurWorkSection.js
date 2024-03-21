import {WorkCarousel, SectionName} from './index'

import Styles from './css/our-work-section.module.scss'


const OurWorkSection = () => {
    return(
     <section id='ourwork' className={Styles.ourWorkSection}>
         <SectionName sectionName={'Наши Работы'}/>
         <WorkCarousel/>
     </section>
    )
}
export default OurWorkSection
