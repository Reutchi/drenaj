import Image from 'next/image'

import Arrow from '../public/orangeArrow.svg'

import Styles from './css/work-carousel.module.scss'

import photoSlide from '../public/img1.jpg'
import building from '../public/building.jpg'

import {useState} from "react";

const WorkCarousel = () => {

    const [imageCarousel, setImageCarousel] = useState(0)


    const photosSlide = [
        {id:1,photo: photoSlide, alt: 'Picture of the author'},
        {id:2,photo: building, alt: 'Picture of the author'},
    ]

    const handleSelectPrev = () => {
        setImageCarousel(prevState => (prevState <= 0 ? prevState : prevState - 1 ))
    }

    const handleSelectNext = () => {
        setImageCarousel(prevState => (prevState >= 2 ? prevState : prevState + 1))
    }

    const handleSelectDot = (idx) => {
        idx !== imageCarousel && setImageCarousel(idx)
    }



    return(
     <div className={Styles.carousel}>
         <div className={Styles.imageWrapper}>
             {photosSlide.map(({id,photo,alt}) => {
                 return(
                     <Image
                         key={id}
                         height={380}
                         src={photo}
                         priority={true}
                         style={{ width: "auto", objectFit: "cover" }}
                         alt={alt}
                     />
                 )
             })}

         </div>
         <ul className={Styles.slides}>
             <li onClick={handleSelectPrev}><Image alt={'image'} src={Arrow}/></li>
             {Array(3).fill(0).map((i,idx) => (
                 <li key={idx} onClick={() => handleSelectDot(idx)} className={`${imageCarousel === idx ? Styles.selected : Styles.ellipse}`}></li>
             ))}
             <li onClick={handleSelectNext}><Image style={{width: "auto"}} alt={'image'} src={Arrow}/></li>
         </ul>
     </div>
    )
}
export default WorkCarousel
