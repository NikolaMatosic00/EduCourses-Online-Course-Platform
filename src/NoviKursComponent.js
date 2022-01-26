import React, { useState } from 'react';
import { db } from './firebase-config'
import { collection, getDocs, addDoc } from "firebase/firestore";
import './NoviKurs.css';

export const NoviKursComponent = () => {

    const [kurs, setKurs] = useState({
        naziv: "",
        autor: "",
        opis: "",
        jezik: "",
        cena: null,
        brojLekcija: null,
        kategorija: "",
        slikaUrl: "",
        prosecnaOcena: 0,
        sertifikovan: true,
        korisnikaZavrsilo: 0

    });

    const kurseviCollectionRef = collection(db, "kursevi")
    const saljiUBazu = async (noviKurs) => {
        await addDoc(kurseviCollectionRef, noviKurs)
    }

    const handleFormInputChange = (name) => (event) => {
        const unesenaVrednost = event.target.value;
        setKurs({ ...kurs, [name]: unesenaVrednost });
    };


    const cancel = () => {
        window.location.assign("/");
    };

    const napravi = (e) => {
        e.preventDefault();

        let ok = true;

        if (kurs.naziv === "" || kurs.autor === "" || kurs.opis === "" ||
            kurs.jezik === "" || kurs.cena === "" || kurs.brojLekcija === "" || kurs.kategorija === ""
            || kurs.slikaUrl === "" || kurs.sertifikovan === "") {
            ok = false;
            alert("Neka polja nisu popunjena")
        }


        if (ok) {
            let test = {
                naziv: kurs.naziv,
                autor: kurs.autor,
                opis: kurs.opis,
                jezik: kurs.jezik,
                cena: kurs.cena,
                brojLekcija: kurs.brojLekcija,
                kategorija: kurs.kategorija,
                slikaUrl: kurs.slikaUrl,
                sertifikovan: kurs.sertifikovan,
                korisnikaZavrsilo: kurs.korisnikaZavrsilo,
                prosecnaOcena: kurs.prosecnaOcena
            }

            saljiUBazu(test)
            alert("Uspesno ste dodali novi kurs")
            console.log(kurs)
            // window.location.assign("/pozdrav");


        }

    }


    return (
        <div>
            <div className="kartica-dodavanje">
                <h2 className="naslov">Novi Kurs</h2>
                    <div className="sve-ostalo">
                                <div className="jedna-grupa">
                                    <label>Naziv kursa:</label>
                                    <input placeholder="Naziv" name="naziv" className="form-control"
                                        value={kurs.naziv} onChange={handleFormInputChange("naziv")} />
                                </div>

                                <div className="jedna-grupa">
                                    <label>Autor:</label>
                                    <input placeholder="Autor" name="autor" className="form-control"
                                        value={kurs.autor} onChange={handleFormInputChange("autor")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>Opis:</label>
                                    <input placeholder="Opis" name="opis" className="form-control"
                                        value={kurs.opis} onChange={handleFormInputChange("opis")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>Kategorija:</label>
                                    <input placeholder="Kategorija" name="kategorija" className="form-control"
                                        value={kurs.kategorija} onChange={handleFormInputChange("kategorija")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>Broj lekcija:</label>
                                    <input placeholder="Broj lekcija" type="number" name="brojLekcija" className="form-control"
                                        value={kurs.brojLekcija} onChange={handleFormInputChange("brojLekcija")} />


                                </div>

                                <div className="jedna-grupa">
                                    <label>URL Slike:</label>
                                    <input placeholder="URL Slike" name="slikaUrl" className="form-control"
                                        value={kurs.slikaUrl} onChange={handleFormInputChange("slikaUrl")} />

                                </div>

                                <div className="jedna-grupa">
                                    <label>Jezik</label>
                                    <input placeholder="Jezik" name="jezik" className="form-control"
                                        value={kurs.jezik} onChange={handleFormInputChange("jezik")} />


                                </div>
                                <div className="jedna-grupa">
                                    <label>Cena:</label>
                                    <input placeholder="Cena" type="number" name="cena" className="form-control"
                                        value={kurs.cena} onChange={handleFormInputChange("cena")} />
                                </div>

                                <br />
                                <button className="btn btn-success" style={{ margin: 5 }} onClick={napravi}>Gotov</button>
                                <button className="btn btn-danger" onClick={cancel}>Cancel</button>

                        </div>
                    </div>
                </div>
    )
}
