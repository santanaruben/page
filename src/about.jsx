import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    window.Spinner.quitar();
  }
  verCredencial(e, referencia, tipo, detalles) {
    e.preventDefault();
    var modal = document.getElementById("myModal");
    var modalImg = document.createElement('img');
    document.getElementById("divModalImagen").appendChild(modalImg);
    modalImg.setAttribute("id", "img01");
    modalImg.setAttribute("class", "modal-content");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = './img/credenciales/'+referencia+'.'+tipo;
    captionText.innerHTML = referencia.toUpperCase()+detalles.toUpperCase();
    var span = document.getElementsByClassName("closeModal")[0];
    span.onclick = function() {
        document.getElementById("divModalImagen").innerHTML = "";
        modal.style.display = "none";
    }
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className="col-11 col-md-8">
            {/* <p>This is the <b>About</b> Component</p> */}
            // <img id="fotoAbout" src="./img/ruben.jpg" className="img-fluid align-self-center rounded" alt=""/>
            <hr/>
            <p className="textoAbout">Hi, I'm Rubén, I specialize in creating decentralized applications using Ethereum Smart Contracts. I'm a Computer Science Engineer and I have a Master's Degree in Software Development. Also I have an online career as an Ethereum Developer from <a className="linkClaro" href="https://academy.b9lab.com/" target='_blank' rel="noopener noreferrer">B9LabAcademy</a>.
            </p>
            <p className="textoAbout">I worked as a Sap Abap Developer in Unicon-ArcelorMittal for two years and as a Teacher for the UPT Aragua the last seven years.</p>
            <hr/>
          </div>
        </div>
        
        <div className='row justify-content-center textoAboutCredenciales mb-3'>
          <div className="col-6 col-md-4">
            <h6><b>Degrees</b></h6>
            <div className="divCredenciales">
              <div>
                <span>ENG</span><br/><span onClick={(e) => this.verCredencial(e,'ingenieria','jpg','')} href='#'><i className="fa fa-user-graduate fa-3x" title="Click to see the credential"></i></span>
              </div>
              <div>
                <span>MSC</span><br/><span onClick={(e) => this.verCredencial(e,'maestria','png','')} href='#'><i className="fa fa-user-graduate fa-3x" title="Click to see the credential"></i></span>{/*fa-graduation-cap fa-user-graduate*/}
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <h6><b>Certifications</b></h6>
            <div className="divCredenciales">
              <div>
                <span>ETH</span><br/><a href='https://certificates.b9lab.com/certificate.html?uuid=4908444d-5c73-4ea9-bc8b-d28ed59c9661' target='_blank' rel="noopener noreferrer"><i className="fab fa-ethereum fa-3x" title="Click to see the credential"></i></a>
              </div>
              <div>
                <span>SAP</span><br/><a href='http://www.cvosoft.com/certificaciones/sap/legajo-UU86K.html' target='_blank' rel="noopener noreferrer"><i className="fa fa-certificate fa-3x" title="Click to see the credential"></i></a>
              </div>
              
            </div>
          </div>
        </div>
        <div className='row justify-content-center mb-2'>
          <div className="col-11 col-md-8">
          <hr/>
            <a className="btn btn-light" href='./docs/CV_Ruben_Santana_2022_en.pdf' target="_blank" rel="noopener noreferrer"><b>Resume</b></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
