import './Config.css'
import BackLogo from '../../assets/Images/Icons/back.svg'

const Config = ({ back , lang }) => {
  return (
    <div className='grid-center main-container config'>
      <button
        className='img-btn img-btn--back'
        type='button'
        onClick={ back }
      >
        <img className='img-btn__img' src={ BackLogo } alt='Back' />
      </button>
      <div className='flex-center config-container'>
        <button type='button'>{ lang.lang }</button>
      </div>
    </div>
  )
}

export default Config