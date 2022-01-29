import React from 'react';
import './Hero.css';

export function Hero({ prijavljeniKorisnikStateT }) {

  const [prijavljeniKorisnik, setPrijavljeniKorisnik] = prijavljeniKorisnikStateT

  return <div>

      <div class="traka">
          
      {prijavljeniKorisnik.korisnickoIme == null
        ? <h1>Make the best of your free time</h1>
        : <h1>Welcome back, {prijavljeniKorisnik.korisnickoIme}</h1>
      }
          <div className="narandzasta"></div>
          <div className="plava"></div>
      </div>

  </div>;
}
