import './PlayMenu.css'
import BackLogo from '../../../assets/Images/Icons/back.svg'

const PlayMenu = ({ restart }) => {
  return (
    <div className='flex-align-center main-container play-menu'>
      <button
        className='img-btn play-menu__back'
        type='button'
        onClick={ restart }
      >
        <img className='img-btn__img' src={ BackLogo } alt='Back' />
      </button>
      <div className='flex-center play-menu-container'>
        <div className='play-menu__card play-menu__new-game'></div>
      </div>
    </div>
  )
}

export default PlayMenu