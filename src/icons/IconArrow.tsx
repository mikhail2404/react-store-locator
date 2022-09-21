import {Styles} from "../types/interfaces";

const IconArrow = ({style}: Styles) => {
    const {color} = style
    return (
      <svg
        width="22px"
        height="14px"
        viewBox="0 0 27 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(0.000000, 0.372503)" fill={color}>
            <path
              // eslint-disable-next-line max-len
              d="M26.6333593,6.71414136 L20.1007375,0.00323436608 C20.0486768,-0.0502450011 19.4608021,0.559475772 18.3371134,1.83239668 L22.7223612,6.33717341 L1.24999938,6.33717341 C0.559624722,6.33717341 0,6.91485115 0,7.62749672 C0,8.34014228 0.559624722,8.91782002 1.24999938,8.91782002 L22.7222987,8.91782002 L18.3371759,13.4225967 C18.2274528,13.5353242 19.9803936,15.3754464 20.1008,15.2517591 C20.4269665,14.9167051 22.6041321,12.6801447 26.6322968,8.54207787 C26.9594216,8.20500242 26.9597758,7.59569025 26.6333593,6.71414136 Z"
              id="Path"
              fillRule="nonzero"
            />
            <rect id="Rectangle" x="0" y="0.427496641" width="3" height="8.5" />
          </g>
        </g>
      </svg>
    )
};

export default IconArrow;
