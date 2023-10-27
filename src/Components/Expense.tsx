import React from 'react';
import Parcel from 'single-spa-react/parcel'
import { LifeCycles } from 'single-spa';
const Expense = () => {
    return <Parcel config={
      () => System.import<LifeCycles>("@SampleAuth/expense-tracker")
    }
    customProp1="expense"
    />
}

export default Expense;