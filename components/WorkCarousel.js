import Image from 'next/image'
import Arrow from '../public/orangeArrow.svg'
import Styles from './css/work-carousel.module.scss'
import photoSlide from '../public/img1.jpg'
import building from '../public/building.jpg'
import { useState } from "react";

const WorkCarousel = () => {
    const [imageCarousel, setImageCarousel] = useState(0)

    const photosSlide = [
        { id: 1, photo: photoSlide, alt: 'Picture of the author' },
        { id: 2, photo: building, alt: 'Picture of the building' },
    ]

    const handleSelectPrev = () => {
        setImageCarousel(prevState => (prevState <= 0 ? prevState : prevState - 1))
    }

    const handleSelectNext = () => {
        setImageCarousel(prevState => (prevState >= photosSlide.length - 1 ? 0 : prevState + 1))
    }

    const handleSelectDot = (idx) => {
        setImageCarousel(idx)
    }

    return (
        <div className={Styles.carousel}>
            <div className={Styles.imagesWrapper}>
                {photosSlide[imageCarousel] && (
                    <Image
                        height={380}
                        src={photosSlide[imageCarousel].photo}
                        priority={true}
                        style={{ objectFit: "cover" }}
                        alt={photosSlide[imageCarousel].alt}
                    />
                )}
            </div>
            <ul className={Styles.slides}>
                <li onClick={handleSelectPrev}><Image alt={'Previous'} src={Arrow} /></li>
                {Array(photosSlide.length).fill(0).map((_, idx) => (
                    <li key={idx} onClick={() => handleSelectDot(idx)} className={`${imageCarousel === idx ? Styles.selected : Styles.ellipse}`}></li>
                ))}
                <li onClick={handleSelectNext}><Image alt={'Next'} src={Arrow} /></li>
            </ul>
        </div>
    )
}

export default WorkCarousel
