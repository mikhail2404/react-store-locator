import Geocode from "react-geocode";

import {IPlace, Response} from "../../types/interfaces";


export const selectPlace = (
    map: any,
    place: IPlace,
    setActivePlaces: (setActivePlaces: boolean) => void,
    setZoom: (zoom: number) => void,
    setQuery: (query: string) => void,
    setNoStoresValue: (setNoStoresValue: string) => void,
    setZooming: (zooming: boolean) => void) => {
    const {description, types} = place;

    Geocode.fromAddress(description).then(
        (response: Response) => {
            setActivePlaces(false);
            setZooming(false);
            setQuery(description);

            map.panTo(response.results[0].geometry.location);

            setNoStoresValue(description);

            if (types.includes("country")) {
                map.setZoom(7);
                setZoom(7);
            }

            if (types.includes("locality")) {
                map.setZoom(10);
                setZoom(10);
            }

            if (types.includes("route")) {
                map.setZoom(15);
                setZoom(15);
            }
        },
        (error: Error) => {
            console.error(error);
        }
    );
};
