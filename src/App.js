import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import ContactList from './components/ContactList'
import {v4 as randomId} from 'uuid'
import Popup from './components/Popup';
import SaveList from './pages/SaveList';
import AddContact from './pages/AddContact';
import Search from './pages/Search';
import Options from './pages/Options';
import Credits from './pages/Credits';

function App() {

const [contatti, setContatti] = useState(initState())
const [visualPopup, setVisualPopup] = useState(false)
const [isFirstTime, setIsFirstTime] = useState(true)

function initState () {
  const temp = sessionStorage.getItem("contacts")
  const savedContacts = JSON.parse(temp)
  return savedContacts || []
}

const deleteContact = id => {
  setContatti([
    ...contatti.filter(contattoDaCanc => {
      return contattoDaCanc.id !== id
    }),
  ])
}

useEffect(() => {
  const temp = sessionStorage.getItem("contacts")
  const loadedContacts = JSON.parse(temp)
  if (loadedContacts){
    setContatti(loadedContacts)
    setIsFirstTime (false)
  }

}, [])

useEffect(() => {
  document.title = "KeepContacts"
  const temp = JSON.stringify(contatti)
  sessionStorage.setItem("contacts", temp)
  contatti.sort((a, b) => a.nome > b.nome ? 1: -1)

}, [contatti])

const handleSubmit = (dati) => {
  const newContact = {
      id: randomId(),
      nome: dati.nome || "",
      cognome: dati.cognome || "",
      telefono: dati.telefono || "",
      via: dati.via || "",
      numero: dati.numero || "",
      citta: dati.citta || "",
      email: dati.email || "",
      website: dati.website || "",
      facebook: dati.facebook || "",
      instagram: dati.instagram || "",
      twitter: dati.twitter || "",
      linkedin: dati.linkedin || "",
      tiktok: dati.tiktok || "",
      note: dati.note,
  }
  setContatti([...contatti, newContact])
}


  return (
    <>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Toolbar title="Contacts" />
          <div className="main">
            <ContactList contatti={contatti} delContact={deleteContact}/>
          </div>
          <Popup  funzione={setIsFirstTime} valore={isFirstTime}
            titolo="KEEPContacts" messaggio="BENVENUTO" testo1="KeepKontacs è un'app che ti permette di
            raccogliere i tuoi contatti e di utilizzarli per chiamare, mandare mail, visitare siti, appuntare 
            note. 
            Principalmente è studiata per desktop ma per alcune funzioni è possibile impiegarla anche da smartphone."
            testo2="Non salviamo i tuoi dati su server e non ti chiediamo nessuna registrazione. Puoi comunque salvare i 
            tuoi contatti su file che conserverai nel pc o dove vorrai tu. I tuoi contatti vengono conservati solo
            momentaneamente nella sessione del browser, quando chiudi il browser verranno irrimediabilmente
            cancellati
            "
          />
        </Route>
        <Route path="/addcontact">
        <Toolbar title="ADD Contacts" />
            <AddContact handleSubmit={handleSubmit} funzione={setVisualPopup} valore={visualPopup}/>
        </Route>

        <Route path="/savelist">
        <Toolbar title="Save/Import Contacts" />
          <SaveList contatti={contatti} setContatti={setContatti} funzione={setVisualPopup} valore={visualPopup}/>
        </Route>

        <Route path="/search">
        <Toolbar title="Search Contacts" />
          <Search />
        </Route>

        <Route path="/credits">
        <Toolbar title="Credits" />
          <Credits />
        </Route>

        <Route path="/options">
        <Toolbar title="Options" />
          <Options />
        </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;
