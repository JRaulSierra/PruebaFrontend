import React from 'react';
import "../../Style/Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <a href="/mundial">Nivel Mundial</a>
            <a href="/c-a">Centro America</a>
            <a href="/formulario">Suscripción</a>
        </div>
    );
}

export default Navbar;