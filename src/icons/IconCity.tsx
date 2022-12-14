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
  width: 32px;
  height: 32px;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
  span {
    background-color: ${({ cityIconStyles }) =>
      cityIconStyles && cityIconStyles.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 32px;
    height: 32px;
  }
`;

interface IWrapperProps {
    cityIconStyles: StylesValues;
}

interface IProps extends  IconCityProps{
    cityIconStyles: StylesValues;
    onClick: (item: IStore, type: string) => void;
}

const IconCity = ({ onClick, item, cityIconStyles, storeLabel }: IProps) => (
  <Wrapper
    cityIconStyles={cityIconStyles}
    onClick={() => onClick( item, "locality" )}>
    <span>{storeLabel}</span>
  </Wrapper>
);

export default IconCity;
