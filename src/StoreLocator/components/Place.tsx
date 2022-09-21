import Highlighter from "react-highlight-words";
import styled from "styled-components";

import { selectPlace } from "../utils/utils";
import {IPlace} from "../../types/interfaces";
import {useContext} from "react";
import {StoreLocatorContext} from "../../context/StoreLocatorContext";

const Wrapper = styled.div`
  cursor: pointer;
  font-size: 11px;
  letter-spacing: 2.75px;
  color: #0b0c0d;
  padding: 15px 0;
  border-bottom: 1px solid rgba(#0b0c0d, 0.1);

  @media (min-width: 768px) {
    border-bottom: 0;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

interface IProps {
    place: IPlace;
    mapInstance: google.maps.Map;
    input: string;
}

const Place = ({ place, input, mapInstance }: IProps) => {
    const {
        setActivePlaces,
        setNoStoresValue,
        setQuery,
        setZoom,
        setZooming
    } = useContext(StoreLocatorContext);
  const values = input.split(" ").length === 1 ? [input] : input.split(" ");

  const handleClick = () => {
    selectPlace(mapInstance, place, setActivePlaces, setZoom, setQuery, setNoStoresValue, setZooming);
  };

  return (
    <Wrapper className="store-locator-place" onClick={handleClick}>
      <Highlighter
        highlightClassName="highlight"
        searchWords={values}
        autoEscape={true}
        highlightTag={"strong"}
        textToHighlight={place.description}
      />
    </Wrapper>
  );
};

export default Place;
