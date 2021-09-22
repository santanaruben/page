import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    window.Spinner.quitar();
  }
  render() {
    return (
      <div className='container-fluid' id="home">
        <div className='row align-items-center' id="contenido">
          {/* <div id="fondo">
            <div id="fondo-image"></div>
          </div> */}
          <div className="col-12 titulo">Rubén Santana</div>
          <div className="col-12 subtitulo">SOFTWARE &nbsp; DEVELOPER</div>
        </div>
      </div>
    );
  }
}

export default Home;