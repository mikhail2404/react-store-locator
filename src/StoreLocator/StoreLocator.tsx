import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { StoreLocatorProvider } from "../context/StoreLocatorProvider";

import Loader from "./components/Loader";
import {StoreLocatorProps} from "../types/interfaces";

const StoreLocatorComponent = lazy(() => import("./StoreLocatorComponent"));

const StoreLocator = ({storeLabel, googleMapApiKey, styles}: StoreLocatorProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <StoreLocatorProvider>
          <StoreLocatorComponent
            storeLabel={storeLabel}
            styles={styles}
            googleMapApiKey={googleMapApiKey}
        />
        </StoreLocatorProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default StoreLocator;
