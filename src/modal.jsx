import React, { Component } from 'react';

class Modal extends Component {
    render() { 
        return ( 
            <div id="myModal" className="modal">
                <span className="closeModal">&times;</span>
                <div id="divModalImagen"></div>
                {/* <img className="modal-content" id="img01" alt=""/> */}
                <div id="caption"></div>
            </div>
         );
    }
}
 
export default Modal;