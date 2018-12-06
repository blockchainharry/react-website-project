import React from 'react';
import ReactDOM from 'react-dom';


class Nav extends React.Component {


    linkPrefix(elem) {
        return 'http://v3.kiip.me' +elem
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#kiip-navbar-collapse" aria-expanded="false"><span className="sr-only">Toggle navigation</span><span
                            className="icon-bar"></span><span className="icon-bar"></span><span
                            className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand active" aria-current="true" href="/">
                            <img src="app/assets/placeholders/logo-transparent-lg.png"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="kiip-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    Ad Solutions
                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a aria-current="false" href={this.linkPrefix('/brands')}>Brands</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a aria-current="false" href={this.linkPrefix('/selfserve')}>Performance
                                        Marketers</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a aria-current="false" href={this.linkPrefix('/developers')}>App Monetization</a>
                            </li>
                            <li><a aria-current="false" href={this.linkPrefix('/moments-data')}>Data</a>
                            </li>

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    Company
                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href={this.linkPrefix('/about')}>About</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a aria-current="false" href={this.linkPrefix('/press')}>Press</a></li>
                                    <li role="separator" className="divider"></li>

                                    <li><a aria-current="false" href={this.linkPrefix('/careers')}>Careers</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a aria-current="false" href={this.linkPrefix('/blog')}>Blog</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    Account
                                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a aria-current="false" href="http://api.kiip.me/login">Sign In</a>
                                    </li>
                                    <li role="separator" className="divider"></li>
                                    <li><a aria-current="false" href="http://api.kiip.me/register?user=developer">Sign Up</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
