import React, { Component } from 'react';

class Blog extends Component {
    // componentWillMount () {
    //     const script = document.createElement("script");
    //     const script2 = script;
    //     script.async = true;
    //     script.charSet = 'utf-8';
    //     script.src = "https://platform.twitter.com/widgets.js";
    //     script2.async = true;
    //     script2.charSet = 'utf-8';
    //     script2.src = "//cdn.embedly.com/widgets/platform.js";
    //     document.body.appendChild(script, script2);
    //   }
    componentDidMount() {
      window.Spinner.quitar();
    }
    render() {
        return ( 
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 text-center">
                  <a className="embedly-card" data-card-controls="0" data-card-theme="dark" href="https://medium.com/@rubensantana">Ruben Santana - Medium</a>
                  </div>
                  <div className="col-12 col-md-4 mt-1 text-center">
                  <a className="twitter-timeline"  data-width="350" data-height="520"  data-theme="dark" href="https://twitter.com/0xRubens?ref_src=twsrc%5Etfw">Tweets by Ruben Santana</a>
                  {/* <a class="twitter-timeline" href="https://twitter.com/0xRubens?ref_src=twsrc%5Etfw">Tweets by Ruben</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                  </div>
                </div>
            </div>
         );
    }
}
 
export default Blog;
