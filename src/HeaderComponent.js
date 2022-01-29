import React from 'react';
import './Header.css'

export function HeaderComponent({ loginPopupState, prijavljeniKorisnikState}) {

    const [loginPopup, setLoginPopup] = loginPopupState
    const [prijavljeniKorisnik, setPrijavljeniKorisnik] = prijavljeniKorisnikState


    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (<div>
        
            <div className="topnav" id="myTopnav">
            <a href="/" className="active">Kursevi</a>
                <a href="korpa">Korpa</a>
                <a href="korisnici">Korisnici</a>
                <a href="registracija">Registracija</a>
                <a onClick={() => setLoginPopup(true)}>Login</a>
            <a className="meni" onClick={myFunction}>
                <i className="fa fa-bars">MENI</i>
                </a>
            </div>
    </div>);
}
