import React, {useState} from "react"
import InputSubmit from '../components/InputSubmit'
import InputForm from '../components/InputForm'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Popup from "../components/Popup";

const SaveList = (props) => {
  const fileNames = {
    json: "contatti.json",
  }
  const [selectedFile, setSelectedFile] = useState()
  const [pick, setPick] = useState(false)
  const [mess, setMess] = useState("")

 

function download ()  {
  const fileData = JSON.stringify(props.contatti);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = fileNames.json;
    link.href = url;
    link.click();

}

  function onFileChange (e){
    setSelectedFile(e.target.files[0])
    setPick(true)
 
  }
  function onFileUpload(e){
    e.preventDefault()
    if (pick) {
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile, "UTF-8");
      fileReader.onload = e => {
        let res  = []
        try {
          res = JSON.parse(fileReader.result)
          props.setContatti(res);
          setMess("Contatti importati con successo")
          props.funzione(true)
           
        } catch {
          setMess("Il file importato non è riconosciuto come JSON")
          props.funzione(true)
        }

      }
    } else {
      setMess("Non è stato caricato nessun file!!")
      props.funzione(true)
    };
  }

  return (
  <div>
      <Container>
        <Row style={{padding: "20px"}}>
          <Col sm={6} sx={12}>
            <Container>
              <InputSubmit metodo={download} tipo="button" nome="SAVE / EXPORT" />    
            </Container>
          </Col>
          <Col sm={6} sx={12}>
            <Container>
              <InputSubmit metodo={onFileUpload} tipo="button" nome="IMPORT"  />
              <InputForm tipo="file" nome="Sfoglia" onChange={onFileChange} />
            </Container>
          </Col>
        </Row>
        <Popup funzione={props.funzione} valore={props.valore} testo1={mess} />
      </Container>

  </div>
  );
}
export default SaveList