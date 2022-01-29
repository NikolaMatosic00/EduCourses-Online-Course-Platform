import React, { useEffect } from 'react';
import { useState } from 'react';
import { Popup } from './Popup';
import './Popup.css';
import { Hero } from './Hero'

export function SviKurseviComponent({ prosledjenaKorpa, prosledjeniKursevi, prijavljeniKorisnikState}) {

    const [korpa, setKorpa] = prosledjenaKorpa
    const [btnPopup, setBtnPopup] = useState(false)
    const [kursevi, setKursevi] = prosledjeniKursevi
    const [tacnoTajKurs, setTacnoTajKurs] = useState({})



    function dodajUKorpu(idKursa) {
        if (!korpa.includes(idKursa))
            setKorpa([...korpa, idKursa])
    }

    function nekaFunk(idKursa) {
        setBtnPopup(true)
        setTacnoTajKurs(kursevi.find(e => e.id === idKursa))
    }



    return (
    <div style={{position: "relative"}}>
            <Hero prijavljeniKorisnikStateT={prijavljeniKorisnikState} />
        
        <div className="card-grid">
                <a className="dodajKursBtn" href="novikurs">Dodaj</a>
                <a className="korpaBtn" href="korpa">Korpa {korpa.length}</a>
            {kursevi.map((kurs) => {
                return (
                    <div className="kartica" key={kurs.id}>
                        <h4 className='cenaKursaUgaona'>{kurs.cena},00- {kurs.jezik.toLowerCase() === 'srpski' ? 'rsd' : 'eur'}</h4>
                        <div className="naslov-slika"><img src={kurs.slikaUrl} alt="dzungla medved kiba" /></div>
                        <div className="opis">{kurs.naziv}</div>
                        <div className="dvadugmeta">
                            <button className="btn" onClick={() => nekaFunk(kurs.id)}>Detalji</button>
                            <button className="btn2" onClick={() => dodajUKorpu(kurs.id)}>U korpu</button>
                        </div>
                        

                    </div>)
            })}
        </div>
            <Popup triggered={btnPopup} setTriggered={setBtnPopup} kurs={tacnoTajKurs}>

            </Popup>

    </div>
    );
}