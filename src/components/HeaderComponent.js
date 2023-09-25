import React, { Component } from 'react';
import './Header.css';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-dark bg-dark'>
                        <h1>Full Stack CRUD App</h1>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;