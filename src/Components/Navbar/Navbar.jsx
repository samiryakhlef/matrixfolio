import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'
import Form from '../Form/Form';

export default function Navbar() {
// state toogle page de formulaire de contact
    const [toggleContact, setToggleContact] = useState(false);
    const formContact = () => {
        setToggleContact(!toggleContact);
    }
// state page de chargement effet matrix
    const [loading, setLoading] = useState(true);
    
// useEffect temps de chargement de la Navbar
    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            setLoading(true);
        }, 4000);
    }, []);

    return (
        <>
        {/* operateur ternaire pour afficher la navbar après 3secondes */}
            {loading ?
                <nav className='nav'>
                    <ul className="list">
                        <li className="items">Accueil</li>
                        <li className="items">Ma Formation</li>
                        {toggleContact && <Form />}
                        <li className="items">Mes Services</li>
                        <li className="items" onClick={formContact}>Contact</li>
                    </ul>
                </nav>
                : true}
        </>
    )
}
