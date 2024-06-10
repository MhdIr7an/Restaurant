import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The Key to Fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque ipsa voluptas architecto. Voluptas alias sunt aliquam. Ex possimus corporis officiis molestiae, doloribus reprehenderit pariatur? Recusandae iure pariatur nulla tempore.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </header>
);

export default Header;
