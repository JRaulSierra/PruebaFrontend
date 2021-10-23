import React from 'react';
import { Link } from "react-router-dom";
import "../../Style/Home.scss"

function Home() {
    return (
        <div className="body">
            <h1>Información actualizada Sobre los casos de COVID-19</h1>
            <div><button ><Link to="/mundial">Nivel Mundial</Link></button></div>
            <div><button><Link to="/c-a">Centro America</Link></button></div>
        </div>
    );
}

export default Home;