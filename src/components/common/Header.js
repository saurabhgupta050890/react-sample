import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className={`nav has-shadow`}>
                <div className={`container nav-left`}>
                    <NavLink className="nav-item is-tab" exact activeClassName="is-active" to="/"> Home </NavLink>
                    <NavLink className="nav-item is-tab" to="/about" activeClassName="is-active"> About </NavLink>
                    <NavLink className="nav-item is-tab" to="/topics" activeClassName="is-active"> Topics </NavLink>
                    <NavLink className="nav-item is-tab" to="/regions" activeClassName="is-active"> Regions </NavLink>
                </div>
            </nav>
        );
    }
}

export default Header;