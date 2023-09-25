import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer"
import { TOGGLE_MOBILE_MENU } from "./action"


const initialState = {
    toggleMobileMenu: false,
}

const Context = createContext({})

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    const toggleMenu = () => {
        dispatch({ type: TOGGLE_MOBILE_MENU })
    }

    return (
        <Context.Provider value={{ ...state, toggleMenu }} >
            {children}
        </Context.Provider>
    )
}

const useAppContext = () => {
    return useContext(Context)
}

export { ContextProvider, useAppContext, initialState };