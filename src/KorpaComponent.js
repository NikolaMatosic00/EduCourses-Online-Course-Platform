import React, { useEffect, useState } from 'react';
import './Korpa.css'

export function KorpaComponent({prosledjenaKorpa, prosledjeniKursevi}) {

    const [korpa, setKorpa] = prosledjenaKorpa
    const [sviKursevi, setSviKursevi] = prosledjeniKursevi
    const [kurseviIzKorpe, setKurseviIzKorpe] = useState([])

    useEffect(() => {
        let kurseviZaDodavanje = sviKursevi.filter(e => korpa.includes(e.id))
        setKurseviIzKorpe(kurseviZaDodavanje)
    }, [korpa, sviKursevi])

    function obrisi(id){
        let korpaBezObrisanog
        korpaBezObrisanog = korpa.filter(e => e !== id)
        setKorpa(korpaBezObrisanog)
    }

  return (<div>
      
      <div className="plava-korpa"></div>
      <div className="narandzasta-korpa"></div>
      <div className="kartica-cele-korpe">
          {kurseviIzKorpe.map(kurs => {
              return (
                  <div key={kurs.id} className="karticaa-korpa">

                    <div className="slika-korpa"><img src={kurs.slikaUrl} alt="dzungla medved kiba" /></div>
                    <div className="naziv">
                        <h2>{kurs.naziv}</h2>
                    </div>
                      <div className="cena">
                          <h2>{kurs.cena},00- {kurs.jezik.toLowerCase() === 'srpski' ? 'rsd' : 'eur'}</h2>
                      </div>
                      <button className='btnUkloni' onClick={() => obrisi(kurs.id)}>X</button>

                  </div>
                  )
          })}
      </div>

  </div>);
}
