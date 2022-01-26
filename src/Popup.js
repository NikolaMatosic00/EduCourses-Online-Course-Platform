import React from 'react';

export function Popup(props) {
    
  
  
  return (props.triggered) ? (
  <div className='popup'>
          <div className="popup--inner">
              <button className='close--btn' onClick={() => props.setTriggered(false)}>X</button>
                <div className="naziv--opis">
                    <h2>{props.kurs.naziv}</h2>
                    <h4>{props.kurs.opis}</h4>
                </div>
                <div className="ostali--podaci">
                    <h3>Autor: {props.kurs.autor}</h3>
                    <h3>Kategorija: {props.kurs.kategorija}</h3>
                    <h3>Korisnika zavrsilo: {props.kurs.korisnikaZavrsilo}</h3>
                    <h3>Broj lekcija: {props.kurs.brojLekcija}</h3>
                    <h3>Jezik: {props.kurs.jezik}</h3>
                </div>
          </div>
  </div>) : "";
}
