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

    const izlogujReloaduj = () => {
        localStorage.removeItem("prijavljen")
        window.location.reload()
    }

    return (<div>
        
            <div className="topnav" id="myTopnav">
            <a href="/" className="active">Kursevi</a>
                <a href="korpa">Korpa</a>
                <a href="korisnici">Korisnici</a>
            
            {localStorage.getItem("prijavljen") ? "" : <a href="registracija">Registracija</a>}
            {localStorage.getItem("prijavljen") ? "" : <a onClick={() => setLoginPopup(true)}>Login</a>}
            {localStorage.getItem("prijavljen") ? <a href='mojnalog'>Moj Nalog</a> : ""}
            {localStorage.getItem("prijavljen") ? <a onClick={() => izlogujReloaduj()}>Log out</a> : ""}


            
            <a className="meni" onClick={myFunction}>
                <i className="fa fa-bars">MENI</i>
                </a>
            </div>
    </div>);
}
