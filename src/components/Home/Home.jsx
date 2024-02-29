import Chef from '../Chef/Chef';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import Explore from '../Explore/Explore';
import Reservation from '../Reservation/Reservation';

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Chef />
      <Explore />
      <Reservation />
    </>
  );
};

export default Home;
