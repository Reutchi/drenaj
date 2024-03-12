import Image from 'next/image'

import Arrow from '../public/orangeArrow.svg'

import Styles from './css/work-carousel.module.scss'

import photoSlide from '../public/img1.jpg'
const WorkCarousel = () => {
    return(
     <div className={Styles.carousel}>
         <Image
             width={1041}
             height={500}
             src={photoSlide}
             style={{objectFit:"cover"}}
             alt="Picture of the author"
         />
         <ul className={Styles.slides}>
             <li>
                 <Image
                     alt={'image'}
                     src={Arrow}
                 />
             </li>
             <li className={`${Styles.ellpse} ${Styles.selected}`}></li>
             <li className={Styles.ellipse}></li>
             <li className={Styles.ellipse}></li>
             <li>
                 <Image
                     alt={'image'}
                     src={Arrow}
                 />
             </li>
         </ul>
     </div>
    )
}
export default WorkCarousel
