import React from 'react'
import './App.scss';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { CartPage, CheckoutPage, HomePage, MyReviewsPage, ProductDetailsPage, ProfileAddressPage, ProfileHomePage, ProfileOrderPage, ProfileRefundsPage, ProfileSecurityPage, SearchPage, ShopDetailsPage, WishlistPage } from './routes/routes';
import LayoutDefault from './public/shared/layout/LayoutDefault';
import ProfileLayout from './customer-profile/shared/layout/ProfileLayout';
import ComingSoon from './customer-profile/shared/components/wrapper/ComingSoon';
import { GlobalContext } from './context/GlobalContext';
import Redirect from './routes/redirect/Redirect';
import { ButtonBackToTop } from './public/shared/components/button/Button';
import LoadingPage from './public/shared/components/page/LoadingPage';
import { PageAnimation } from './public/shared/components/page/PageAnimation';
import PageNotFound from './public/shared/components/page/PageNotFound';
const App = () => {
  return (


    <GlobalContext>
      <ButtonBackToTop />
      <Routes>
        <Route path='/' element={<LayoutDefault><HomePage /></LayoutDefault>} />
        <Route path='/search' element={<LayoutDefault><SearchPage /></LayoutDefault>} />
        <Route path='/products/:slug' element={<LayoutDefault><ProductDetailsPage /></LayoutDefault>} />
        <Route path='/stores' element={<LayoutDefault><PageAnimation><h1>All store lists for all store <Link to={'/stores/samsung.120/'}>Samsung</Link> </h1></PageAnimation></LayoutDefault>} />
        <Route path='/stores/:id/' element={<LayoutDefault><ShopDetailsPage /></LayoutDefault>} />
        <Route path='/cart' element={<LayoutDefault><CartPage /></LayoutDefault>} />
        <Route path='/checkout' element={<LayoutDefault><CheckoutPage /></LayoutDefault>} />
        {/* profile */}
        <Route path='/profile' element={<Redirect location={'/profile/index'} />} />
        <Route path='/profile/index' element={<ProfileLayout><ProfileHomePage /></ProfileLayout>} />
        <Route path='/profile/orders' element={<ProfileLayout><ProfileOrderPage /></ProfileLayout>} />
        <Route path='/profile/inbox' element={<ProfileLayout><ComingSoon /></ProfileLayout>} />
        <Route path='/profile/wishlist' element={<ProfileLayout><WishlistPage /></ProfileLayout>} />
        <Route path='/profile/refunds' element={<ProfileLayout><ProfileRefundsPage /></ProfileLayout>} />
        <Route path='/profile/reviews' element={<ProfileLayout><MyReviewsPage /></ProfileLayout>} />
        <Route path='/profile/address' element={<ProfileLayout><ProfileAddressPage /></ProfileLayout>} />
        <Route path='/profile/security' element={<ProfileLayout><ProfileSecurityPage /></ProfileLayout>} />
        <Route path='/profile/settings' element={<ProfileLayout><ComingSoon /></ProfileLayout>} />

        {/* profile end */}
        <Route path='*' element={<LayoutDefault><PageNotFound /></LayoutDefault>} />
      </Routes>
    </GlobalContext>

  )
}

export default App