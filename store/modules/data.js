import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     navItems : [
        {id:1,title:'О нас', href: '/'},
        {id:1,title:'Продукция', href: '/'},
        {id:1,title:'Контакты', href: '/'},
    ],
    hamburgerMenuOpen: false
}

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        toggleHambMenu(state) {
            state.hamburgerMenuOpen = !state.hamburgerMenuOpen;
        },
    }
})

export const {toggleHambMenu } = data.actions;

export default data.reducer
