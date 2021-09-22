import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/fuentes.css';
import './css/all.min.css';
import './css/App.css';
import './css/cubo.css';
import './css/modalImage.css';
import './css/spinner.css';
import About from './about';
import Home from './home';
import Portfolio from './portfolio';
// import Blog from './blog';
import Contact from './contact';
// import Footer from './footer';
import Modal from './modal';
import { Switch, Route, Link } from 'react-router-dom';
const FontFaceObserver = require('fontfaceobserver')

var menuSuperior = [
  { nombre: 'Home' , ruta: '/' },
  { nombre: 'About' , ruta: '/about' },
  { nombre: 'Portfolio', ruta: '/portfolio' },
  // { nombre: 'Blog', ruta: '/blog' },
  { nombre: 'Contact', ruta: '/contact' }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      linkActual: 0,
    };
  }
  
  componentDidMount = async function () {
    const GreatDayPersonalUse = new FontFaceObserver('GreatDayPersonalUse');
    const Montserrat = new FontFaceObserver('Montserrat-Thin');
    const OstrichSansMedium = new FontFaceObserver('OstrichSans-Medium');
    Promise.all([GreatDayPersonalUse.load(null,300000), Montserrat.load(null,300000), OstrichSansMedium.load(null,300000)]).then(function () {
      var myVideo = document.getElementById('myVideo');
      setTimeout(function () { myVideo.play(); }, 100);
      window.Spinner.quitarInicio();
    });
    const FABrands = new FontFaceObserver('fa-brands-400');
    FABrands.load(null,300000);
    const FASolid = new FontFaceObserver('fa-solid-900');
    FASolid.load(null,300000);
  }

  render() {
    let ocultarMenuDesplegable = (valor) => {
      if (this.state.linkActual !== valor) {
        window.Spinner.colocar();
        this.setState({linkActual: valor});
      }
      if (document.body.offsetWidth < 768) {
        document.getElementById('menu-btn').click();
      }
    }
    return (
      <div className="App">
        <div id="divHeader">
          <header className="App-header header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
              {
                menuSuperior.map(function(registro, index) {
                  return (
                    <li key={index}>
                      <Link to={registro.ruta} onClick={() => ocultarMenuDesplegable(index)}>{registro.nombre}</Link>
                    </li>
                  );
                })
              }
            </ul>
          </header>
        </div>
        {/* <div id="background">
          <div id="background-image"></div>
        </div> */}
        <video
          id="myVideo" 
          muted loop playsInline
          src="./video/intro.mp4"
          type="video/mp4"
          onLoadStart={() => {
            window.Spinner.colocarInicio();
          }}
          // onLoadedData={() => {
          //   this.cargarRecursos();
          // }}
        />
        <div id="loaderInicio" className='loader'></div>
        <div id="loader" className='loader'></div>
        <div id="contentInicio" className='blurring'>
          <div id="content" className='blurring'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/portfolio' component={Portfolio}/>
              {/* <Route path='/blog' component={Blog}/> */}
              <Route path='/contact' component={Contact}/>
            </Switch>
            <Modal/>
          </div>
        </div>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    );
  }
}

export default App;
