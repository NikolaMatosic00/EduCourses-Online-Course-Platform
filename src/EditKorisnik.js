import React, { useEffect, useRef } from 'react';
import { db } from './firebase-config';
import './Login.css'
import { collection,  updateDoc, doc} from "firebase/firestore";

export function EditKorinik(props) {


    const email = useRef(null)
    const brojTelefona = useRef(null)

    const usersCollectionRef = collection(db, "korisnici")
    
    const saljiUBazu = async () => {
        const userDoc = doc(usersCollectionRef, props.idK.id)
        await updateDoc(userDoc, { email: email.current.value, telefon: brojTelefona.current.value});
        props.setTriggered(false)
        props.setRefreshKorisnike(prevCount => prevCount + 1)
    }

    return (props.triggered) ? (
        <div className='popup-login'>
            <div className="popup--inner-login">
                <button className='close--btn' onClick={() => props.setTriggered(false)}>X</button>
                <div className="korisnicko-sifra">
                    <input defaultValue={props.idK.email} ref={email} placeholder={props.idK} className="form-control" />
                    <input defaultValue={props.idK.telefon} ref={brojTelefona} placeholder="Novi broj telefona.." className="form-control" />
                    <button onClick={() => saljiUBazu()}>Promeni</button>
                </div>
            </div>
        </div>) : "";
}
