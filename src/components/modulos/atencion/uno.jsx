import React, { Component } from 'react';
import Principal from '../../Principal';
import Footer from '../../estructura/Footer';

class Uno extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Principal/>
                <div className="content-wrapper">
                    hol
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default Uno;