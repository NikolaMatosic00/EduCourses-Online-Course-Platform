import { doc, deleteDoc } from 'firebase/firestore';
import React from 'react';
import './Korisnici.css'
export function KorisniciComponent({ prosledjeniKorisnici, firestoreKorisniciCollectionRef, obnoviKorisnike}) {

    const [korisnici, setKorisnici] = prosledjeniKorisnici;
    const [refreshKorisnike, setRefreshKorisnike] = obnoviKorisnike

    const obrisiKorisnikaIzBaze = async (id) => {
        await deleteDoc(doc(firestoreKorisniciCollectionRef, id))
        setRefreshKorisnike(prevCount => prevCount + 1)
        alert("Uspesno obrisan korisnik")
    } 

  return (<div> 
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
                                      <button className='btn-ukloni-promeni'>Promeni</button>
                                  </td>
                              </tr>
                      )

                  }
              </tbody>

          </table>
      </div>
  </div>);
}
