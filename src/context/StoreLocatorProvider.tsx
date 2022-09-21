import {StoreLocatorContext} from "./StoreLocatorContext";
import {ActiveInfo, IStore, StoreLocatorState} from "../types/interfaces";
import {useReducer} from "react";
import {storeLocatorReducer} from "./storeLocatorReducer";


const initialState: StoreLocatorState = {
    query: "",
    currentGeolocation: false,
    activePlaces: false,
    activeInfo: {
        active: false,
        id: null
    },
    zoom: 3,
    store: {},
    closest: null,
    noStoresValue: "",
    extractCountry: "",
    zooming: false
}


interface StoreLocatorProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const StoreLocatorProvider = ({children}: StoreLocatorProviderProps) => {
    const [storeLocatorState, dispatch] = useReducer(storeLocatorReducer, initialState)
    const setQuery = (query: string) => {
        dispatch({type: "SET_QUERY", payload: query})
    }
    const setCurrentGeolocation = (currentGeolocation: boolean) => {
        dispatch({type: "SET_CURRENT_GEOLOCATION", payload: currentGeolocation})
    }
    const setActivePlaces = (activePlaces: boolean) => {
        dispatch({type: 'SET_ACTIVE_PLACES', payload: activePlaces})
    }
    const setActiveInfo = (activeInfo: ActiveInfo) => {
        dispatch({type: 'SET_ACTIVE_INFO', payload: activeInfo})
    }
    const setZoom = (zoom: number) => {
        dispatch({type: 'SET_ZOOM', payload: zoom})
    }
    const setZooming = (zooming: boolean) => {
        dispatch({type: 'SET_ZOOMING', payload: zooming})
    }
    const setStore = (store: IStore | {}) => {
        dispatch({type: 'SET_STORE', payload: store})
    }
    const setClosest = (closest: boolean | null) => {
        dispatch({type: 'SET_CLOSEST', payload: closest})
    }
    const setNoStoresValue = (noStoresValue: string) => {
        dispatch({type: 'SET_NO_STORES_VALUE', payload: noStoresValue})
    }
    const setExtractCountry = (extractCountry: string) => {
        dispatch({type: 'SET_EXTRACT_COUNTRY', payload: extractCountry})
    }
    return (
        <StoreLocatorContext.Provider value={{
            storeLocatorState,
            setQuery,
            setCurrentGeolocation,
            setActivePlaces,
            setActiveInfo,
            setZoom,
            setZooming,
            setStore,
            setClosest,
            setNoStoresValue,
            setExtractCountry
        }}>
            {children}
        </StoreLocatorContext.Provider>
    )
}