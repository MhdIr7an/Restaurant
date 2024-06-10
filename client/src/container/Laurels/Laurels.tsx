import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.scss';

interface Laurels {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const AwardCard = ({ award: { imgUrl, title, subtitle } }: {award: Laurels}) => (
  <article className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </article>
)

const Laurels = () => (
  <section className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & Recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </section>
);

export default Laurels;
