import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import { SviKurseviComponent } from './SviKurseviComponent'
import { HeaderComponent } from './HeaderComponent'
import {NoviKursComponent} from './NoviKursComponent'
import { KorpaComponent } from './KorpaComponent'
import { KorisniciComponent } from './KorisniciComponent'

function App() {

  const [korpa, setKorpa] = useState([])
  const firestoreKurseviCollectionRef = collection(db, "kursevi")
  const [kursevi, setKursevi] = useState([])
  const [korisnici, setKorinsici] = useState([])
  const firestoreKorisniciCollectionRef = collection(db, "korisnici")
  const [refreshKorisnike, setRefreshKorisnike] = useState(0)
  useEffect(() => {

    const funk = async () => {
      const data = await getDocs(firestoreKurseviCollectionRef);
      setKursevi(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    funk();

  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(firestoreKorisniciCollectionRef);
      setKorinsici(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();

  }, [refreshKorisnike])

  useEffect(() => {
    const korpaLocalStorage = JSON.parse(localStorage.getItem("korpa")) ?? []
    setKorpa(korpaLocalStorage)

  }, [])

  useEffect(() => {
    localStorage.setItem("korpa", JSON.stringify(korpa))
  }, [korpa])


  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact >
            <SviKurseviComponent prosledjenaKorpa={[korpa, setKorpa]} prosledjeniKursevi={[kursevi, setKursevi]} />
          </Route>
          <Route path="/novikurs" exact >
            <NoviKursComponent />
          </Route>
          <Route path="/korpa" exact >
            <KorpaComponent prosledjenaKorpa={[korpa, setKorpa]} prosledjeniKursevi={[kursevi, setKursevi]} />
          </Route>
          <Route path="/korisnici" exact >
            <KorisniciComponent obnoviKorisnike={[refreshKorisnike, setRefreshKorisnike]} firestoreKorisniciCollectionRef={firestoreKorisniciCollectionRef} prosledjeniKorisnici={[korisnici, setKorinsici]} />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
