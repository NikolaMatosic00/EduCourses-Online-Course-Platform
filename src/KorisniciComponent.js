import { doc, deleteDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { EditKorinik } from './EditKorisnik';
import './Korisnici.css'

export function KorisniciComponent({ prosledjeniKorisnici, firestoreKorisniciCollectionRef, obnoviKorisnike}) {

    const [korisnici, setKorisnici] = prosledjeniKorisnici;
    const [refreshKorisnike, setRefreshKorisnike] = obnoviKorisnike
    const [popupTriggered, setPopupTriggered] = useState(false)
    const [korisnikKojiSeMenja, setKorisnikKojiSeMenja] = useState({
        id: "",
        email: "",
        telefon: ""
    })

    const obrisiKorisnikaIzBaze = async (id) => {
        await deleteDoc(doc(firestoreKorisniciCollectionRef, id))
        setRefreshKorisnike(prevCount => prevCount + 1)
        alert("Uspesno obrisan korisnik")
    } 

    const otvoriPopupPromenaKorisnika = (id, email, telefon) => {
        setKorisnikKojiSeMenja({id: id, email: email, telefon: telefon});
        setPopupTriggered(true)
    }

  return (<div> 
      <EditKorinik setRefreshKorisnike={setRefreshKorisnike} triggered={popupTriggered} setTriggered={setPopupTriggered} idK={korisnikKojiSeMenja}/>
      <div className="kartica-svih-korisnika">

          <table className='tabela-korisnika'>
              <thead>
                  <tr>
                      <td>Ime</td>
                      <td>Prezime</td>
                      <td>Email</td>
                      <td>Username</td>
                      <td>Telefon</td>
                  </tr>
              </thead>

              <tbody>

                  {
                      korisnici.map(
                          korisnik =>
                              <tr key={korisnik.id}>
                                  <td>{korisnik.ime}</td>
                                  <td>{korisnik.prezime}</td>
                                  <td>{korisnik.email}</td>
                                  <td>{korisnik.korisnickoIme}</td>
                                  <td>{korisnik.telefon}</td>
                                  <td>
                                      <button onClick={() => obrisiKorisnikaIzBaze(korisnik.id)} className='btn-ukloni-promeni'>Ukloni</button>
                                  </td>
                                  <td>
                                      <button onClick={() => otvoriPopupPromenaKorisnika(korisnik.id, korisnik.email, korisnik.telefon)} className='btn-ukloni-promeni'>Promeni</button>
                                  </td>
                              </tr>
                      )

                  }
              </tbody>

          </table>
      </div>
  </div>);
}
