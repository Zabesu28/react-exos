import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Plat from './components/Plat.jsx'

function App() {
  return (
    <>
    <Header/>
    <body>
      <section id='liste-plat'>
        <Plat image='https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg' nom='tacos-a-l-unite' prix='3'></Plat>
        <Plat image='https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg' nom='enchiladas' prix='12'></Plat>
        <Plat image='https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg' nom='mole-poblano' prix='15'></Plat>
      </section>
    </body>
    <Footer/>
    </>
  );
}

export default App;
