import React from 'react';
import Parcel from 'single-spa-react/parcel'
import { LifeCycles } from 'single-spa';
const Ems = () => {
    return <Parcel config={
        () => System.import<LifeCycles>("@SampelAuth/ems")
      }
      name="ems app"
      customProp1="ems"
       />
}

export default Ems;