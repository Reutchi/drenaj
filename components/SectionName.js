import Styles from "@/components/css/section-name.module.scss";

const SectionName = ({sectionName}) => {
    return(
        <div>
            <p className={Styles.aboutSectionSectionName}>{sectionName}</p>
        </div>
    )
}
export default SectionName
