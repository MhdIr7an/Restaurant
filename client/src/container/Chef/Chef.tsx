import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.scss';

const Chef = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vitae pariatur recusandae eius placeat ea blanditiis nulla mollitia!</p>
        </div>
        <p className='p__opensans'>Ducimus, est culpa unde provident eligendi commodi non et eum ab enim nobis ad reprehenderit harum tempora placeat, libero vero atque hic.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </section>
);

export default Chef;
