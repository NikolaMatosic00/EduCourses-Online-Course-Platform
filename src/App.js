import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TimerBackwardsComponent } from './TimerBackwardsComponent'
import {db} from './firebase-config'
import {collection, doc, getDocs} from 'firebase/firestore'
import { async } from '@firebase/util';
import { CardGroup, Card } from 'react-bootstrap'
import { SviKurseviComponent } from './SviKurseviComponent'
import { HeaderComponent } from './HeaderComponent'
import {NoviKursComponent} from './NoviKursComponent'

function App() {

  const [korpa, setKorpa] = useState([])

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
          <Route path="/kursevi" exact >
            <SviKurseviComponent prosledjenaKorpa={[korpa, setKorpa]} />
          </Route>
          <Route path="/novikurs" exact >
            <NoviKursComponent />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
