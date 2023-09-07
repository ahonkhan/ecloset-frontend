import React from 'react'
import './App.scss';
import { ButtonGreen, ButtonLgLightBlue, ButtonMdDarkBlue, ButtonYellowOutline, ButtonYellowOutlineIcon } from './public/shared/components/Buttons/Buttons';
const App = () => {
  return (
    <div className='px-4 py-4'>
      <ButtonLgLightBlue>Load more</ButtonLgLightBlue>
      <br />
      <br />
      <ButtonMdDarkBlue>Join now</ButtonMdDarkBlue>
      <br /><br />
      <ButtonGreen>Get Started</ButtonGreen>
      <br /><br />
      <div className="bg-slate-800 py-12 px-12">
        <ButtonYellowOutlineIcon>See how it works </ButtonYellowOutlineIcon>

      </div>
    </div>
  )
}

export default App