/* eslint-disable react/jsx-no-undef */
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title} = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} target='_blank' className='link' rel='noreferrer'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
