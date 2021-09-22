import React, { Component } from 'react';
import Cubo from './cubo';
import DataTable from 'react-data-table-component';

// const trabajos = require("./trabajos.json");
var trabajos = [{"id":0,"name":null,"description":null,"img":null,"type":"img","link":null,"repo":null}]

let cuboClases = ['mostrar-frente', 'mostrar-derecha', 'mostrar-detras', 'mostrar-izquierda', 'mostrar-arriba', 'mostrar-abajo'];

class Portfolio extends Component {
  constructor() {
    super();
    this.state = { 
      claseSeleccionada: 0,
      // trabajos: trabajos,
      // listaTrabajos: trabajos
      trabajos: trabajos,
      listaTrabajos: trabajos
    };
  }
  componentDidMount() {
    if (document.location.hostname === "localhost" || document.location.hostname === "127.0.0.1") {
      trabajos = require("./json/trabajos.json");
      this.setState({
        trabajos: trabajos,
        listaTrabajos: trabajos
      })
    }
    else {
      fetch(`https://raw.githubusercontent.com/santanaruben/santanaruben.github.io/master/json/trabajos.json`)
        .then(res => res.json())
        .then(trabajos => {
          this.setState({
            trabajos: trabajos,
            listaTrabajos: trabajos
          })
        });
    }
    window.Spinner.quitar();
  }
  render() {

    const columnas = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
        center: true,
        // minWidth: '30px',
        maxWidth: '150px'
      },
      {
        name: 'Description',
        selector: 'description',
        sortable: true,
        center: true
      }
    ];

    let trab = this.state.trabajos;
    let works = [];
    let girarCubo = (valor) => {
      let valorStep = Math.trunc(valor / 6) + 1;
      for (let i=(valorStep-1)*6; i<trab.length; i++) {
        works.push(trab[i]);
      }
      this.setState({listaTrabajos: works});
      let valorDeClase = valor%6;
      let claseActual = cuboClases[this.state.claseSeleccionada];
      let cubo = document.querySelector('.cubo');
      cubo.classList.remove(claseActual);
      cubo.classList.add(cuboClases[valorDeClase]);
      this.setState({claseSeleccionada: valorDeClase});
      document.querySelector('.divPortafolioCubo').scrollIntoView(({block: 'center'}));
    }
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-12 col-lg-6 divPortafolioCubo">
            <Cubo trabajos={this.state.listaTrabajos}/>
          </div>
          <div className="col-12 col-lg-6 divPortafolioTabla mb-4">
          <DataTable
            columns={columnas}
            data={trab}
            noHeader={true}
            keyField='id'
            pointerOnHover={true}
            pagination={true}
            paginationPerPage={6}
            paginationRowsPerPageOptions={[6]}
            paginationComponentOptions={{noRowsPerPage: true}}
            onRowClicked={cell=>girarCubo(cell.id)}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;