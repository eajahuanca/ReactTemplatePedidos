import React, { Component } from 'react';
import Principal from '../../Principal';
import Footer from '../../estructura/Footer'

class Pedido extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Principal />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dashboard</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="info-box bg-yellow">
                                                    <span className="info-box-icon"><i className="fa fa-cart-plus"></i></span>
                                                    <div className="info-box-content">
                                                        <span className="info-box-text">Inventory</span>
                                                        <span className="info-box-number">5,200</span>
                                                        <div className="progress">
                                                            <div className="progress-bar" ></div>
                                                        </div>
                                                        <span className="progress-description">
                                                            50% Increase in 30 Days
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Pedido;