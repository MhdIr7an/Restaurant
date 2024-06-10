import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import { Navbar } from '../../components';
import './App.scss';

const App = () => (
  <main>
    <Navbar isReservation={false} />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </main>
);

export default App;
