import './Menu.css'
import { useState } from 'react'
import ConfigLogo from '../../assets/Images/Icons/settings.svg'
import PlayMenu from './PlayMenu/PlayMenu'

const Menu = ({ lang }) => {
  const [playScreen, setPlayScreen] = useState(false)

  return (
    <div id='Menu'>
      <button
        className='play-btn'
        type='button'
        onClick={ () => setPlayScreen(true) }
      >{ lang.play }</button>

      { playScreen && <PlayMenu /> }

      <button className='config-btn' type='button'>
        <img src={ ConfigLogo } alt='Config' />
      </button>
    </div>
  )
}

export default Menu