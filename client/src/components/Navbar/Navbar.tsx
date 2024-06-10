import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.scss';

interface NavbarProps {
  isReservation: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isReservation }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='/'>
          <img src={images.gericht} alt="app logo" />
        </a>
      </div>
      {isReservation ? (
        <h2 className='reservation__header'>
          Reservation
        </h2>
      ) : (
        <>
          <ul className='app__navbar-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#awards'>Awards</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
          <div className='app__navbar-reservation'>
            <a href='/reservation' className='p__opensans'>Book Table</a>
          </div>
          <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
              <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} /> 
                <ul className='app__navbar-smallscreen_links'>
                  <li className='p__opensans'><a href='#home'>Home</a></li>
                  <li className='p__opensans'><a href='#about'>About</a></li>
                  <li className='p__opensans'><a href='#menu'>Menu</a></li>
                  <li className='p__opensans'><a href='#awards'>Awards</a></li>
                  <li className='p__opensans'><a href='#contact'>Contact</a></li>
                  <li className='p__opensans'><a href='/reservation'>Book Table</a></li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}
export default Navbar;