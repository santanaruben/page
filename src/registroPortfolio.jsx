import React, { Component } from 'react';

class RegistroPortfolio extends Component {
    render() { 
        return ( 
            <tr className="trabajo-item" onClick={this.props.onClick.bind(this)}>
                <td>
                    <b>{this.props.registro.name}</b>
                </td>
                <td>
                    {this.props.registro.description}
                </td>
            </tr>
         );
    }
}
 
export default RegistroPortfolio;