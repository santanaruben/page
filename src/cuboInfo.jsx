import React, { Component } from 'react';

class CuboInfo extends Component {
    zoom(e) {
        e.preventDefault();
        var modal = document.getElementById("myModal");
        var modalImg = document.createElement(this.props.trabajo.type);
        document.getElementById("divModalImagen").appendChild(modalImg);
        modalImg.setAttribute("id", "img01");
        modalImg.setAttribute("class", "modal-content");
        modalImg.setAttribute("controls", "true");
        modalImg.setAttribute("autoplay", "true");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = this.props.trabajo.img;
        captionText.innerHTML = this.props.trabajo.name;
        var span = document.getElementsByClassName("closeModal")[0];
        span.onclick = function() {
            document.getElementById("divModalImagen").innerHTML = "";
            modal.style.display = "none";
        }
    }
    render() {
        if(this.props.trabajo==undefined) {
            return <></>
        }
        else {
        return (
            <div>
                <div className="divCuboTitulo">
                    <h3>{this.props.trabajo.name}</h3>
                </div>
                <div className="divCuboImagen">
                    <this.props.trabajo.type onClick={this.zoom.bind(this)} src={this.props.trabajo.img} alt={this.props.trabajo.name} controls autoPlay={false}/>
                </div>
                <div className="divCuboBotones">
                    <a href={'http://'+this.props.trabajo.repo} target="_blank" rel="noopener noreferrer"><i id="github" className="fab fa-github fa-3x " title="Repo"></i></a>
                    <a href={'https://'+this.props.trabajo.link} target="_blank" rel="noopener noreferrer"><i id="linkApp" className="fa fa-link fa-3x" title="Link"></i></a>
                </div>
            </div>
         );
        }
    }
}
 
export default CuboInfo;