import './Menu.css'
import ConfigLogo from '../../assets/Images/Icons/settings.svg'

const Menu = ({config, lang , play }) => {
  return (
    <div className='grid-center main-container'>
      <button
        className='play-btn'
        onClick={ play }
        type='button'
      >
        { lang.play }
      </button>

      <button
        className='img-btn config-btn'
        onClick={ config }
        type='button'
      >
        <img className='img-btn__img' src={ ConfigLogo } alt='Config' />
      </button>
    </div>
  )
}

export default Menu