import React from 'react'
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Tamanna from './routes/Tamanna';
import Ahon from './routes/Ahon';
import { CartPage, CheckoutPage, HomePage, MyReviewsPage, ProductDetailsPage, ProfileAddressPage, ProfileHomePage, ProfileOrderPage, ProfileRefundsPage, SearchPage, WishlistPage } from './routes/routes';
import LayoutDefault from './public/shared/layout/LayoutDefault';
import ProfileLayout from './customer-profile/shared/layout/ProfileLayout';
import ComingSoon from './customer-profile/shared/components/wrapper/ComingSoon';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault><HomePage /></LayoutDefault>} />
        <Route path='/search' element={<LayoutDefault><SearchPage /></LayoutDefault>} />
        <Route path='/products/:slug' element={<LayoutDefault><ProductDetailsPage /></LayoutDefault>} />
        <Route path='/cart' element={<LayoutDefault><CartPage /></LayoutDefault>} />
        <Route path='/checkout' element={<LayoutDefault><CheckoutPage /></LayoutDefault>} />
        {/* profile */}
        <Route path='/profile' element={<Navigate to={'/profile/index'} />} />
        <Route path='/profile/index' element={<ProfileLayout><ProfileHomePage /></ProfileLayout>} />
        <Route path='/profile/orders' element={<ProfileLayout><ProfileOrderPage /></ProfileLayout>} />
        <Route path='/profile/inbox' element={<ProfileLayout><ComingSoon /></ProfileLayout>} />
        <Route path='/profile/wishlist' element={<ProfileLayout><WishlistPage /></ProfileLayout>} />
        <Route path='/profile/refunds' element={<ProfileLayout><ProfileRefundsPage /></ProfileLayout>} />
        <Route path='/profile/reviews' element={<ProfileLayout><MyReviewsPage /></ProfileLayout>} />
        <Route path='/profile/address' element={<ProfileLayout><ProfileAddressPage /></ProfileLayout>} />
        <Route path='/profile/security' element={<ProfileLayout><ComingSoon /></ProfileLayout>} />
        <Route path='/profile/settings' element={<ProfileLayout><ComingSoon /></ProfileLayout>} />

        {/* profile end */}

        <Route path='/tamanna' element={<Tamanna />} />
        <Route path='/ahon' element={<Ahon />} />
      </Routes>
    </>
  )
}

export default App