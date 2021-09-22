import React, { Component } from 'react';
import Correo from './correo';

class Contact extends Component {
  componentDidMount() {
    window.Spinner.quitar();
  }
  render() {
    let styles = {color: 'white'};
    return (
      <div className='container-fluid mt-5' style={styles}>

          <div className='row justify-content-center textoAboutCredenciales mt-2'>
            <div className="col">
              <Correo/>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              or use a social channel
            </div>
          </div>

          <div className='row justify-content-center divCredenciales textoAboutCredenciales mt-1'>
          
            <div className="col-6 col-md-4 mb-2">
            
              <a href='https://twitter.com/rubensantana_' target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter fa-3x" title="Twitter"></i></a>
              &nbsp;&nbsp;&nbsp;
              <a href='https://wa.me/584124435919' target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp fa-3x" title="Whatsapp"></i></a>
              &nbsp;&nbsp;&nbsp;
              <a href='https://t.me/rubensantana' target='_blank' rel="noopener noreferrer"><i className="fab fa-telegram-plane fa-3x" title="Telegram"></i></a>
            </div>
          
          </div>

      </div>
    );
  }
}

export default Contact;