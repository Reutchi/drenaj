import Styles from './css/about-section.module.scss';

const AboutSection = ({
                          videoDescription = 'Широкий ассортимент, сотни довольных клиентов!',
                          sectionName = 'О нас',
                          title = '10 лет на рынке',
                          description = 'Если Вы хотите купить облицовочный кирпич в Актобе, тогда Вы обратились точно по адресу. У нас есть кирпич различного цвета и размера. Мы на рынке облицовочного кирпича более 10 лет! Мы - прямые поставщики Украинского завода "ЕВРОТОН", "Белая Церковь" и также поставщики ведущих Российских кирпичных заводов таких как "ТМ Ликолор", "НЗКМ кирпичный завод", "Копыловская керамика", "Брянский кирпичный завод", "КЗ Красная Гвардия".Наша команда - это молодые современные лица, которые помогут подобрать оптимальный дизайн, выполнят полный подсчет кирпича от и до.\n\nПодберем кирпич для Вашего дома в соответствии ЦЕНА=КАЧЕСТВО!!',
                      }) => {
    return (
        <section className={Styles.aboutSection}>
            <div className={Styles.wrapperAboutSection}>
                <p className={Styles.aboutSectionSectionName}>{sectionName}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={Styles.aboutSectionVideoSection}>
                <p>{videoDescription}</p>
                <iframe
                    width="491"
                    height="313"
                    src="https://www.youtube.com/embed/o-x6Kk28fn8"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default AboutSection;
