import Styles from './css/about-section.module.scss';
import SectionName from "@/components/SectionName";
import {useSelector} from "react-redux";

const AboutSection = () => {
    const {title,description,videoDescription,videoLink} = useSelector((state) => state.data.aboutSection)
    return (
        <section id="about" className={Styles.aboutSection}>
            <div className={Styles.wrapperAboutSection}>
                <SectionName sectionName='О нас'/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={Styles.aboutSectionVideoSection}>
                <p>{videoDescription}</p>
                <div className={Styles.iframeWrapper}>
                    <iframe
                        src={videoLink}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
