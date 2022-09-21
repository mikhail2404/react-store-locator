import styled from "styled-components";
import {IPlace} from "../../types/interfaces";

import Place from "./Place";

const Wrapper = styled.div`
  position: absolute;
  margin-top: 5px;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  left: 0;
  right: 0;
  z-index: 2;
  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 768px) {
    position: relative;
    padding: 0 85px;
  }
`;

interface IProps {
  places: IPlace[];
  mapInstance: google.maps.Map;
  input: string;
}

const Places = ({ places, input, mapInstance }:IProps) => {
  return (
    <Wrapper className="store-locator-places">
      {places &&
        places.map((place, index) => (
          <Place
            key={index}
            place={place}
            mapInstance={mapInstance}
            input={input}
          />
        ))}
    </Wrapper>
      )
};

export default Places;
