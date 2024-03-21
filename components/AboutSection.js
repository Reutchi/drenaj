import Styles from './css/about-section.module.scss';

import SectionName from "@/components/SectionName";

import {useDispatch, useSelector} from "react-redux";
import {useWindowSize} from "@uidotdev/usehooks";
import {toggleReadMore} from "@/store/modules/data";

const AboutSection = () => {
    const {title,description,videoDescription,videoLink,isReadMore} = useSelector((state) => state.data.aboutSection)
    const {width} = useWindowSize()
    const dispatch = useDispatch()

    const handleReadMore = () => {
        dispatch(toggleReadMore())
    }

    return (
        <section id="about" className={Styles.aboutSection}>
            <div className={Styles.wrapperAboutSection}>
                <SectionName sectionName='О нас'/>
                <h3>{title}</h3>
                <p className={Styles.text}>
                    {isReadMore && width < 1200 ? description.slice(0, 100) : description}
                    <span onClick={handleReadMore}>
                {isReadMore ? " ...read more" : " show less"}
            </span>
                </p>
            </div>
            <div className={Styles.aboutSectionVideoSection}>
                <p>{videoDescription}</p>
                <div className={Styles.iframeWrapper}>
                    <iframe className="responsive-iframe" src={videoLink}></iframe>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
