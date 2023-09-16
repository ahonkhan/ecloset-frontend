import React from 'react'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Tamanna from './routes/Tamanna';
import Ahon from './routes/Ahon';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>This is home page</h1>} />
        <Route path='/tamanna' element={<Tamanna />} />
        <Route path='/ahon' element={<Ahon />} />
      </Routes>
    </>
  )
}

export default App