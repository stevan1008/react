import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">
                    Ristorante con Fusion
                    </NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div row row-header>
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>             
            </React.Fragment>
        );
    }
}

export default Header;