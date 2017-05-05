import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
                <Link to="/"> Home </Link>
                { " | " }
                <Link to="/about"> About </Link>
                { " | " }
                <Link to="/topics"> Topics </Link>
                { " | " }
                <Link to="/regions"> Regions </Link>
            </nav>
        );
    }
}

export default Header;