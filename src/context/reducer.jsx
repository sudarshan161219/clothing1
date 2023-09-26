import { TOGGLE_MENU, TOGGLE_THEME } from "./action"

const reducer = (state, action) => {

    if (action.type === TOGGLE_MENU) {
        return {
            ...state,
            toggleMenu: !state.toggleMenu
        }
    }

    if (action.type === TOGGLE_THEME) {
        const { toggleTheme } = state
        return {
            ...state,
            toggleTheme: !state.toggleTheme,
            theme: !toggleTheme ? "dark" : "light"
        }
    }

    throw new Error(`no such action : ${action.type}`);
}

export default reducer;