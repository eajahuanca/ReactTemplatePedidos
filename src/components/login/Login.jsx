import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="#">Sistema de <b>Pedidos</b></a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Ingrese sus datos de session</p>
                        <form >
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" placeholder="Username" />
                                <span className="fa fa-user form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="fa fa-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Ingresar</button>
                                </div>
                                <div className="col-xs-8">
                                    <div className="checkbox icheck pull-right">
                                        <label>
                                            <input type="checkbox" /> Recordarme
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
         
export default Login;