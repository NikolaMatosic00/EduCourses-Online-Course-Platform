import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { db } from './firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
import { Popup } from './Popup';
import './Popup.css';

export function SviKurseviComponent({ prosledjenaKorpa}) {

    const [korpa, setKorpa] = prosledjenaKorpa
    const [btnPopup, setBtnPopup] = useState(false)
    const [kursevi, setKursevi] = useState([])
    const firestoreUsersCollectionRef = collection(db, "kursevi")
    const [tacnoTajKurs, setTacnoTajKurs] = useState({})

    useEffect(() => {

        const funk = async () => {
            const data = await getDocs(firestoreUsersCollectionRef);
            setKursevi(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        funk();

    }, [])

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
        
        <div className="card-grid">
                <a class="dodajKursBtn" href="novikurs">Dodaj</a>
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