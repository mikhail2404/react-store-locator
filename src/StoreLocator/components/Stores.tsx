import styled from "styled-components";

import StoresNoItem from "./NoStore";
import {IStore, Styles, StylesValues} from "../../types/interfaces";
import Store from "./Store";

const Wrapper = styled.div<IWrapper>`
  padding: 0;
  height: calc(100% - 125px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ scrollbarTrackStyles }) =>
      scrollbarTrackStyles && scrollbarTrackStyles.background};
    border-right: 11px solid white;
    border-left: 1px solid white;
    border-bottom: 15px solid white;
    border-top: 15px solid white;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ scrollbarThumbStyles }) =>
      scrollbarThumbStyles && scrollbarThumbStyles.background};
    border-right: 10px solid white;
  }

  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;

interface IWrapper {
  scrollbarTrackStyles: StylesValues;
  scrollbarThumbStyles: StylesValues;
}

interface IProps {
  data: IStore[];
  mapInstance: google.maps.Map;
  getNearestDivvyStation: () => void;
  style: Styles;
  storeStyles: Styles;
  noStoresStyles: Styles;
}

const Stores = ({
  data,
  mapInstance,
  getNearestDivvyStation,
  style,
  storeStyles,
  noStoresStyles
}: IProps) => {
  const { scrollbarTrackStyles, scrollbarThumbStyles } = style;

  return (
    <Wrapper
      scrollbarTrackStyles={scrollbarTrackStyles}
      scrollbarThumbStyles={scrollbarThumbStyles}
      id="stores-container"
      className="store-locator-items">
      {data &&
        data.map((item) => (
          <Store
            style={storeStyles}
            key={item.nid}
            mapInstance={mapInstance}
            item={item}
          />
        ))}

      {!data.length && (
        <StoresNoItem
          expandButtonStyles={noStoresStyles}
          getNearestDivvyStation={getNearestDivvyStation}
        />
      )}
    </Wrapper>
  );
};

export default Stores;
