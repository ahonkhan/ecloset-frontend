import React from 'react'
import { PageAnimation } from '../shared/components/page/PageAnimation'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import ShopList from './components/ShopList/ShopList'
import ShopHeader from './components/ShopHeader/ShopHeader'
const ShopPage = () => {
    return (
        <PageAnimation>
            <DefaultWrapper>
                <ShopHeader />
                <ShopList />
            </DefaultWrapper>
        </PageAnimation>
    )
}

export default ShopPage