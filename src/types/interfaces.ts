export interface StoreLocatorState {
    query: string
    currentGeolocation: boolean
    activePlaces: boolean
    activeInfo: ActiveInfo
    zoom: number
    store: IStore | {}
    closest: boolean | null
    noStoresValue: string
    extractCountry: string
    zooming: boolean
}

export interface IStore {
    country: string;
    postalCode: string;
    lat: number;
    lng: number;
    nid?: string;
    title: string;
    body: string;
    email: string;
    phone: string;
    locality: string;
    administrativeArea: string;
    website: string;
    websiteUrl: string;
    address: string;
    count: number;
    show: boolean;

}

export interface ActiveInfo {
    id?: string | null
    active: boolean
}

interface MatchedSubstring {
    length: number;
    offset: number;
}


interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[];
}

interface Term {
    offset: number;
    value: string;
}

export interface IPlace {
    description: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: string[];
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface LatLng {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: LatLng;
    southwest: LatLng;
}

export interface Geometry {
    location: LatLng;
    location_type: string;
    viewport: Viewport;
}

export interface PlusCode {
    compound_code: string;
    global_code: string;
}

export interface Result {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    plus_code: PlusCode;
    types: string[];
}

export interface Response {
    results: Result[];
    status: string;
    plus_code: PlusCode;

}

export interface StylesValues {
    [key: string]: any ;
}
export interface Styles {
    [key: string]: StylesValues;
}

export interface onClickProps {
    item: IStore;
    type: string;
}

export interface MarkerIconsProps {
    item: IStore;
}

export interface IconCityProps extends MarkerIconsProps{
    storeLabel: string;
}

export interface HaversineDistance {
    haversineDistance: (latLng: LatLng) => number;
}

export interface StoreLocatorProps{
    storeLabel: string;
    styles: StylesValues;
    googleMapApiKey: string;
}

export interface RawStore {
    title: string
    field_store_address_address_line1:  string
    field_store_address_administrative_area: string
    field_store_address_country_code: string
    field_store_address_locality:  string
    field_store_address_postal_code: string
    field_store_phone: string
    field_store_email: string
    field_store_website: string
    field_store_geolocation: string
    field_store_geolocation_1: string
    field_store_geolocation_proximity_form: string
    nid: string
    body: string
    field_store_website_1:  string
}

interface Count {
    count: number
}

export interface Country{
    country: string
}

export interface StoreCount {
    [key: string]: Count
}

 interface Bounds {
    nw: LatLng;
    se: LatLng;
    sw: LatLng;
    ne: LatLng;
}

export interface Location {
    center: LatLng;
    bounds: Bounds;
    zoom?: number;
    marginBounds?: Bounds;
}