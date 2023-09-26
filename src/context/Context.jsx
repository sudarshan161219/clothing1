import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer"
import { TOGGLE_MENU } from "./action"


const initialState = {
    toggleMenu: false,
}

const Context = createContext({})

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    const toggleMenuFn = () => {
        dispatch({ type: TOGGLE_MENU })
    }

    return (
        <Context.Provider value={{ ...state, toggleMenuFn }} >
            {children}
        </Context.Provider>
    )
}

const useAppContext = () => {
    return useContext(Context)
}

export { ContextProvider, useAppContext, initialState };