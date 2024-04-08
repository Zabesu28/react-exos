import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Dish from './components/Dish.jsx'

function App() {
  return (
    <>
      <Header/>
      <main>
          <Dish img='https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg' name='Tacos à l’unité' price='3'/>
          <Dish img='https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg' name='Enchiladas' price='12'/>
          <Dish img='https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg' name='Mole poblano' price='15'/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
