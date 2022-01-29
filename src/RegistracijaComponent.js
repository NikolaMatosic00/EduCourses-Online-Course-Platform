import React, { useState } from 'react';
import { db } from './firebase-config'
import { collection, addDoc } from "firebase/firestore";

export const RegistracijaComponent = ({ obnoviKorisnike }) => {
    
    const [refreshKorisnike, setRefreshKorisnike] = obnoviKorisnike

    const [korisnik, setKorisnik] = useState({
        ime: "",
        prezime: "",
        korisnickoIme: "",
        email: "",
        lozinka: "",
        ponovljenaLozinka: "",
        telefon: "",
    });

    const usersCollectionRef = collection(db, "korisnici")
    const saljiUBazu = async (newUser) => {
        await addDoc(usersCollectionRef, newUser)
    }

    const handleFormInputChange = (name) => (event) => {
        const unesenaVrednost = event.target.value;
        setKorisnik({ ...korisnik, [name]: unesenaVrednost });
    };


    const cancel = () => {
        window.location.assign("/");
    };

    const napravi = (e) => {
        e.preventDefault();

        let ok = true;
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (korisnik.ime === "" || korisnik.prezime === "" || korisnik.korisnickoIme === "" ||
            korisnik.email === "" || korisnik.lozinka === "" || korisnik.ponovljenaLozinka === "" || korisnik.telefon === "") {
            ok = false;
            alert("Neka polja nisu popunjena")
        }

        else if (korisnik.lozinka.length < 2) {
            ok = false;
            alert("Lozinka mora imati minimalno 2 karaktera :)")
        }
        else if (korisnik.lozinka !== korisnik.ponovljenaLozinka) {
            ok = false;
            alert("Lozinke se ne podudaraju")
        }

        else if (!korisnik.email.match(mailformat)) {
            ok = false;
            alert("Unesena nevazeca email adresa")
        }


        if (ok) {
            let test = {
                ime: korisnik.ime,
                prezime: korisnik.prezime,
                korisnickoIme: korisnik.korisnickoIme,
                email: korisnik.email,
                lozinka: korisnik.lozinka,
                telefon: korisnik.telefon
            }

                saljiUBazu(test)
                alert("Uspesno ste napravili nalog")
                console.log(korisnik)
                setRefreshKorisnike(prevCount => prevCount + 1)

        }

    }


    return (
        <div>
            <div className='sve-novi-kurs'>
                <div className="narandzasta-novi-kurs"></div>
                <div className="plava-novi-kurs"></div>
                <div className="kartica-dodavanje">
                    <h2 className="naslov-registracija">Registracija</h2>
                    <div className="sve-ostalo">
                                <div className="jedna-grupa">
                                    <label>Ime:</label>
                                    <input placeholder="Ime" name="ime" className="form-control"
                                        value={korisnik.ime} onChange={handleFormInputChange("ime")} />
                                </div>

                                <div className="jedna-grupa">
                                    <label>Prezime:</label>
                                    <input placeholder="Prezime" name="prezime" className="form-control"
                                        value={korisnik.prezime} onChange={handleFormInputChange("prezime")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>Korisnicko Ime:</label>
                                    <input placeholder="Korisnicko Ime" name="korisnickoIme" className="form-control"
                                        value={korisnik.korisnickoIme} onChange={handleFormInputChange("korisnickoIme")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>Telefon:</label>
                                    <input placeholder="Telefon" name="korisnickoIme" className="form-control"
                                        value={korisnik.telefon} onChange={handleFormInputChange("telefon")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>E-mail:</label>
                                    <input placeholder="Email" name="email" className="form-control"
                                        value={korisnik.email} onChange={handleFormInputChange("email")} />

                                </div>

                                <div className="jedna-grupa">
                                    <label>Lozinka</label>
                                    <input placeholder="Lozinka" name="lozinka" type="password" className="form-control"
                                        value={korisnik.lozinka} onChange={handleFormInputChange("lozinka")} />


                                </div>
                                <div className="jedna-grupa">
                                    <label>Ponovite lozinku:</label>
                                    <input placeholder="Ponovite lozinku" name="repeatPassword" type="password" className="form-control"
                                        value={korisnik.ponovljenaLozinka} onChange={handleFormInputChange("ponovljenaLozinka")} />
                                </div>

                                <br />
                                <button className="btn btn-success" style={{ margin: 5 }} onClick={napravi}>Gotov</button>
                                <button className="btn btn-danger" onClick={cancel}>Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        
    )
}
