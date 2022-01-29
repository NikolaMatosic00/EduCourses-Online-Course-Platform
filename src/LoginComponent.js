import React, { useEffect, useRef } from 'react';
import './Login.css'

export function LoginComponent(props) {


    const [korisnici, setKorisnici] = props.prosledjeniKorisnici
    const [prijavljeniKorisnik, setPrijavljeniKorisnik] = props.prijavljeniKorisnikState

    const korisnickoImeRef = useRef(null)
    const lozinkaRef = useRef(null)

    function ulogujKorisnika() {
        const korisnickoIme = korisnickoImeRef.current.value
        const lozinka = lozinkaRef.current.value

        var pronadjeni = korisnici.filter(kor => {
            return kor.korisnickoIme === korisnickoIme && kor.lozinka === lozinka
        })

        if (pronadjeni.length == 0) {
            alert("Takav ne postoji")
        } else{
            setPrijavljeniKorisnik(pronadjeni[0])
            localStorage.setItem("prijavljen", "da")
            props.setTriggered(false)
        }

    }

    return (props.triggered) ? (
        <div className='popup-login'>
            <div className="popup--inner-login">
                <button className='close--btn' onClick={() => props.setTriggered(false)}>X</button>
                <div className="korisnicko-sifra">
                        <input ref={korisnickoImeRef} placeholder="Korisničko ime.." name="korisnickoIme" className="form-control"/>
                        <input ref={lozinkaRef} placeholder="Lozinka.." name="lozinka" className="form-control" />
                    <button onClick={() => ulogujKorisnika()}>Uloguj se</button>
                </div>
            </div>
        </div>) : "";
}
