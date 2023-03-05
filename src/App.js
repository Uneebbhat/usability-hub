import './App.css';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Companies from './Components/Companies';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Platform from './Components/Platform';
import Work from './Components/Work';

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Header />
      <Companies />
      <Cards />
      <Work />
      <Platform />
      <Footer />
    </>
  );
}

export default App;
