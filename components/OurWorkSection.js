import SectionName from "@/components/SectionName";

import Styles from './css/our-work-section.module.scss'

import WorkCarousel from "@/components/WorkCarousel";

const OurWorkSection = () => {
    return(
     <section className={Styles.ourWorkSection}>
         <SectionName sectionName={'Наши Работы'}/>
         <WorkCarousel/>
     </section>
    )
}
export default OurWorkSection
