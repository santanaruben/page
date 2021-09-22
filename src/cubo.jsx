import React, { Component } from 'react';
import CuboCara from './cuboCara';

class Cubo extends Component {
    static defaultProps = {
        clasesCara : ['cubo_cara--frente', 'cubo_cara--derecha', 'cubo_cara--detras', 'cubo_cara--izquierda', 'cubo_cara--arriba', 'cubo_cara--abajo']
    }
    render() { 
        let tr = this.props.trabajos;
        return ( 
            <div className="escena--cubo">
                <div className="cubo cubo--rotar comienza-girando mostrar-frente">
                    {
                        this.props.clasesCara.map(function(clase, index) {
                            return <CuboCara key={index} clase={clase} trabajo={tr[index]}/>
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Cubo;