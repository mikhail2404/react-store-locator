
import {
    Loader,
    LoaderBox,
    LoaderLogo,
    LoaderMessage,
    LoaderWrapper,
    Overlay
} from "./styled";
import React from "react";



interface IProps extends React.HTMLAttributes<HTMLElement> {
    orderItemLoader?: boolean;
    message?: string;
    extend?: number;
    extendMobile?: number;
    mobileSticky?: boolean;
    desktopFixed?: boolean;
    zIndex?: number;
}

const LoadingSpinner = (props: IProps) => {
    return (
        <Overlay {...props}>
            <LoaderWrapper orderItemLoader={props.orderItemLoader}>
                <LoaderBox>
                    <Loader></Loader>
                    <LoaderLogo src="/themes/react-app/src/assets/loader-logo.png" />
                </LoaderBox>
            </LoaderWrapper>

            {props.message && (
                <LoaderMessage {...props}>{props.message}</LoaderMessage>
            )}
        </Overlay>
    );
};

export default LoadingSpinner;