import React, { Fragment } from 'react';
import BestSelling from '../../components/BestSelling/BestSelling';
import NewProducts from '../../components/NewProducts/NewProducts';


//  Components
import BuySell from '../../components/BuySell/BuySell';
import Commercial from '../../components/Commercial/Commercial';
import Deliver from '../../components/Deliver/Deliver';
import Kind from '../../components/Kind/Kind';
import Stamp from '../../components/Stamps/Stamp';
import NewAccessories from '../../components/NewAccessories/NewAccessories';



const Index = ({ showInfo }) => {
    return (
        <Fragment>
            <BuySell />
            <BestSelling showInfo={showInfo} />
            <NewProducts showInfo={showInfo} />
            <Commercial />
            <NewAccessories showInfo={showInfo} />
            <Kind />
            <Deliver />
            <Stamp />
        </Fragment>
    )
}

export default Index;