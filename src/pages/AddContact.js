import React, { useState } from "react"
import InputForm from '../components/InputForm'
import InputSubmit from '../components/InputSubmit'
import Popup from "../components/Popup";

const AddContact = (props) => {

  const [inputs, setInputs] = useState({})
  const [mess, setMess] = useState("");

  const onCh = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })

}



  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.nome){
      inputs.nome = inputs.nome.charAt(0).toUpperCase()+inputs.nome.slice(1)
      if(inputs.cognome){
      inputs.cognome = inputs.cognome.charAt(0).toUpperCase()+inputs.cognome.slice(1)
      }

      props.handleSubmit(inputs)

      // Azzera...
      setInputs({
        nome:"",
        cognome: "",
        telefono: "",
        via: "",
        numero: "",
        citta: "",
        email: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin:"",
        tiktok: "",
        note: "",
        
      })
      props.funzione(true);
      setMess("Contatto aggiunto con successo !")
    }else{
      props.funzione(true);
      setMess("Il campo nome non può essere vuoto")

    }

  }

  return (
  <div>
      
      <form onSubmit={handleSubmit} className="form-container">
        <InputForm
          id="nm"
          label="Nome:"
          nome="nome"
          tipo="text"
          value={inputs.nome || ''}
          onChange={onCh}
        />
        <InputForm
          id="cgn"
          label="Cognome:"
          nome="cognome"
          tipo="text"
          value={inputs.cognome || ''}
          onChange={onCh}
        />
        <InputForm
          id="tlf"
          label="Tel:"
          nome="telefono"
          tipo="text"
          value={inputs.telefono || ''}
          onChange={onCh}
        />
        <InputForm
          id="via"
          label="Via:"
          nome="via"
          tipo="text"
          value={inputs.via || ''}
          onChange={onCh}
        />
        <InputForm
          id="numero"
          label="Numero civico:"
          nome="numero"
          tipo="text"
          value={inputs.numero || ''}
          onChange={onCh}
        />
        <InputForm
          id="citta"
          label="Città:"
          nome="citta"
          tipo="text"
          value={inputs.citta || ''}
          onChange={onCh}
        />
        <InputForm
        id="email"
        label="Email:"
        nome="email"
        tipo="email"
        value={inputs.email || ''}
        onChange={onCh}
        />
        <InputForm
        id="website"
        label="Web Site:"
        nome="website"
        tipo="url"
        value={inputs.website || ''}
        onChange={onCh}
        />
        <InputForm
        id="facebook"
        label="Facebook:"
        nome="facebook"
        tipo="text"
        value={inputs.facebook || ''}
        onChange={onCh}
        />
        <InputForm
        id="instagram"
        label="Instagram:"
        nome="instagram"
        tipo="text"
        value={inputs.instagram || ''}
        onChange={onCh}
        />
        <InputForm
        id="twitter"
        label="Twitter:"
        nome="twitter"
        tipo="text"
        value={inputs.twitter || ''}
        onChange={onCh}
        />
        <InputForm
        id="linkedin"
        label="Linkedin:"
        nome="linkedin"
        tipo="text"
        value={inputs.linkedin || ''}
        onChange={onCh}
        />
        <InputForm
        id="tiktok"
        label="Tik Tok:"
        nome="tiktok"
        tipo="text"
        value={inputs.tiktok || ''}
        onChange={onCh}
        /> 

        <InputForm
        id="note"
        label="Note:"
        nome="note"
        tipo="text"
        value={inputs.note || ''}
        onChange={onCh}
        />

        <InputSubmit 
          nome="+"
          tipo="submit" 
          />

        </form>
        {props.valore && <Popup valore={props.valore} funzione={props.funzione}     
            testo2={mess} 
          />}
  </div>
  );
}
export default AddContact