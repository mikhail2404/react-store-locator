import styled from "styled-components";
import {IconCityProps, IStore, StylesValues} from "../types/interfaces";

const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  font-size: 14px;
  font-weight: 900;
  left: 50%;
  color: white;
  width: 52px;
  height: 52px;
  border: ${({ activeCityIconStyles }) =>
    activeCityIconStyles && `2px solid ${activeCityIconStyles.borderColor}`};
  background-color: #fff;
  padding: 5px;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 10;
  }
  span {
    background-color: ${({ activeCityIconStyles }) =>
      activeCityIconStyles && activeCityIconStyles.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 32px;
    height: 32px;
  }
`;

interface IWrapperProps {
    activeCityIconStyles: StylesValues;
}

interface IProps extends  IconCityProps{
    activeCityIconStyles: StylesValues;
    onClick: (item: IStore, type: string) => void;
}

const IconCity = ({ onClick, item, activeCityIconStyles, storeLabel }: IProps) => (
  <Wrapper
    activeCityIconStyles={activeCityIconStyles}
    onClick={() => onClick( item, "locality" )}>
    <span>{storeLabel}</span>
  </Wrapper>
);

export default IconCity;
