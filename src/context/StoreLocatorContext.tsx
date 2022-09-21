import {createContext} from "react";
import {ActiveInfo, IStore, StoreLocatorState} from "../types/interfaces";

export type StoreLocatorProps = {
    storeLocatorState: StoreLocatorState
    setQuery: (query: string) => void
    setCurrentGeolocation: (currentGeolocation: boolean) => void
    setActivePlaces: (activePlaces: boolean) => void
    setActiveInfo: (activeInfo: ActiveInfo) => void
    setZoom: (zoom: number) => void
    setZooming: (zooming: boolean) => void
    setStore: (store: IStore | {}) => void
    setClosest: (closest: boolean | null) => void
    setNoStoresValue: (noStoresValue: string) => void
    setExtractCountry: (extractCountry: string) => void
}

export const StoreLocatorContext = createContext<StoreLocatorProps>({} as StoreLocatorProps)