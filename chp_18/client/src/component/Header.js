import React from 'react'
import '../style.css';
import TrollFace from '../assets/header_logo.png'
export default function Header(props) {
    return (
        <header>
       <img src={TrollFace} alt="troll_face" className="header-logo"/>
       <p className="header-title">Meme Generator</p>
        </header>
    )
}
