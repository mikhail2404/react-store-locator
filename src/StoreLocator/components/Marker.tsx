import { useContext, useState } from "react";

import { StoreLocatorContext } from "../../context/StoreLocatorContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import IconCity from "../../icons/IconCity";
import IconCityActive from "../../icons/IconCityActive";
import IconPin from "../../icons/IconPin";

import InfoMap from "./InfoMap";
import {HaversineDistance, IconCityProps, onClickProps, IStore, Styles} from "../../types/interfaces";

interface IProps extends HaversineDistance, IconCityProps {
  style: Styles
  onClick: ({item, type}: onClickProps) => void;
  text: string;
  mapInstance: google.maps.Map;
  lat: number;
  lng: number;
}

const Marker = ({ onClick, item, haversineDistance, style, storeLabel }: IProps) => {
  const { windowWidth } = useWindowDimensions();
  const { storeLocatorState, setActiveInfo } = useContext(StoreLocatorContext);
  const { zoom: activeZoom, activeInfo, store } = storeLocatorState;
  const { activeCityIconStyles, cityIconStyles, pinIconStyles, infoMapStyles } = style;
  const { nid, show } = item;
  const [active, setActive] = useState(false);

  const handleClick = (item: IStore, type: string) => {
    setActive(!active);
    onClick({item, type});
    setActiveInfo({
      id: nid,
      active: !activeInfo.active
    });
  };

  return (
    <>
      {activeZoom >= 5 &&
        ("nid" in store && store.nid === nid ? (
          <IconCityActive
            activeCityIconStyles={activeCityIconStyles}
            storeLabel={storeLabel}
            onClick={handleClick}
            item={item}
          />
        ) : (
          <IconCity
            cityIconStyles={cityIconStyles}
            storeLabel={storeLabel}
            onClick={handleClick}
            item={item}
          />
        ))}

      {activeZoom < 5 && show && (
        <IconPin pinIconStyles={pinIconStyles} onClick={onClick} item={item} />
      )}

      {activeInfo.id === nid && activeInfo.active && windowWidth > 768 && (
        <InfoMap infoMapStyles={infoMapStyles} item={item} haversineDistance={haversineDistance} />
      )}
    </>
  );
};


export default Marker;
