import React, { Component } from 'react';
import CuboInfo from './cuboInfo';

class CuboCara extends Component {
    render() {
        return (
            <div className={'cubo_cara '+this.props.clase}>
                <CuboInfo trabajo={this.props.trabajo}/>
            </div>
        );
    }
}
 
export default CuboCara;