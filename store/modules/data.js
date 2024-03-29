import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     navItems: [
        {id:1,title:'О нас', href: '#about'},
        {id:2,title:'Наши Работы', href: '#ourwork'},
        {id:3,title:'Контакты', href: '/#order'},
    ],
    hamburgerMenuOpen: false,
    aboutSection: {
        videoDescription: 'Широкий ассортимент, сотни довольных клиентов!',
        title: '10 лет на рынке',
        description: 'Если Вы хотите купить облицовочный кирпич в Актобе, тогда Вы обратились точно по адресу. У нас есть кирпич различного цвета и размера. Мы на рынке облицовочного кирпича более 10 лет! Мы - прямые поставщики Украинского завода "ЕВРОТОН", "Белая Церковь" и также поставщики ведущих Российских кирпичных заводов таких как "ТМ Ликолор", "НЗКМ кирпичный завод", "Копыловская керамика", "Брянский кирпичный завод", "КЗ Красная Гвардия".Наша команда - это молодые современные лица, которые помогут подобрать оптимальный дизайн, выполнят полный подсчет кирпича от и до.\n\nПодберем кирпич для Вашего дома в соответствии ЦЕНА=КАЧЕСТВО!!',
        videoLink: 'https://www.youtube.com/embed/o-x6Kk28fn8',
        isReadMore: true,
    }
}

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        toggleHambMenu(state) {
            state.hamburgerMenuOpen = !state.hamburgerMenuOpen;
        },
        toggleReadMore(state){
            state.aboutSection.isReadMore = !state.aboutSection.isReadMore
        }
    }
})

export const {toggleHambMenu,toggleReadMore } = data.actions;

export default data.reducer
