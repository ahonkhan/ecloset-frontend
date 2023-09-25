import React from 'react'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Tamanna from './routes/Tamanna';
import Ahon from './routes/Ahon';
import { CartPage, HomePage, ProductDetailsPage, SearchPage } from './routes/routes';
import LayoutDefault from './public/shared/layout/LayoutDefault';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault><HomePage /></LayoutDefault>} />
        <Route path='/search' element={<LayoutDefault><SearchPage /></LayoutDefault>} />
        <Route path='/products/:slug' element={<LayoutDefault><ProductDetailsPage /></LayoutDefault>} />
        <Route path='/cart' element={<LayoutDefault><CartPage /></LayoutDefault>} />
        <Route path='/tamanna' element={<Tamanna />} />
        <Route path='/ahon' element={<Ahon />} />
      </Routes>
    </>
  )
}

export default App