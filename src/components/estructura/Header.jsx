import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>EAC</b></span>
                    <span className="logo-lg">Sistema de <b>Pedidos</b></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">Tiene 4 mensajes</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/avatar5.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Equipo de desarrollo
                                                        <small><i className="fa fa-clock-o"></i> 5 min.</small>
                                                    </h4>
                                                    <p>Porque no comprar un tema mas impresionante?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown notifications-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-bell-o"></i>
                                    <span class="label label-danger">10</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="header">Cuentas con 10 notificaciones</li>
                                    <li>
                                        <ul class="menu">
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-aqua"></i> 5 nuevos miembros se unieron hoy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-warning text-yellow"></i> Una descripcion muy larga de la notificacion podria ocasionar problemas en el diseño de la pagina
                                            </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-red"></i> 5 nuevos miembros se unieron
                                                </a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="footer"><a href="#">Ver todas las Notificaciones</a></li>
                                </ul>
                            </li>

                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="img/avatar5.png" class="user-image" alt="User Image" />
                                    <span class="hidden-xs">Edwin Ajahuanca Callisaya</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="img/avatar5.png" class="img-circle" alt="User Image" />

                                        <p>
                                            Edwin Ajahuanca Callisaya - Web Developer
                                            <small>Desde Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li class="user-body">
                                        <div class="row">
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Seguidores</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Ventas</a>
                                            </div>
                                            <div class="col-xs-4 text-center">
                                                <a href="#">Amigos</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="#" class="btn btn-default btn-flat">Mi Cuenta</a>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="btn btn-default btn-flat">Salir</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}