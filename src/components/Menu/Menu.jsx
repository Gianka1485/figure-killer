import './Menu.css'
import { useState } from 'react'
import ConfigLogo from '../../assets/Images/Icons/settings.svg'
import ConfigScreen from '../Config/Config'
import PlayMenu from './PlayMenu/PlayMenu'

const Menu = ({ lang }) => {
  const [playScreen, setPlayScreen] = useState(false)
  const [configScreen, setConfigScreen] = useState(false)

  return (
    <div className='grid-center main-container'>
      <button
        className='play-btn'
        type='button'
        onClick={ () => setPlayScreen(true) }
      >
        { lang.play }
      </button>

      { playScreen && <PlayMenu restart={ () => setPlayScreen(false) } /> }

      <button
        className='img-btn config-btn'
        type='button'
        onClick={ () => setConfigScreen(true) }
      >
        <img className='img-btn__img' src={ ConfigLogo } alt='Config' />
      </button>

      { configScreen && <ConfigScreen /> }
    </div>
  )
}

export default Menu