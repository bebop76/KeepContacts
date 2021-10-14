import React from 'react';
/********* BOOTSTRAP */
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';

const Contact = ({ contatto, delContact }) => {

    // const [editing, setEditing] = useState(false)
    const editing = false

    // const textInput = {
    //     width: "10%",
    //     padding: "10px",
    //     border: "1px solid #ff5523",
    // }

    const iniziali = (nome) => {
        return nome.charAt(0)
    }


    let viewMode = {}
    let editMode = {}
    let enableMode = {}

    if (editing) {
        viewMode.display = "none"
        enableMode.display = ""
    } else {
        editMode.display = "none"
        enableMode.display = "disabled"

    }

    return (
        <li>
            <Accordion defaultActiveKey="0" style={{paddingBottom: "32px"}}>
                    <Accordion.Toggle as={Card.Header} eventKey={contatto.id} style={{ cursor: "pointer", borderRadius: "25px", textAlign: "center" }}>
                            <Row>
                                <Col md={2} xs={12}>
                                    <span style={{
                                        fontSize: "48px",
                                        fontWeight: "bolder",
                                        borderRadius: "100%",
                                        backgroundColor: "transparent",
                                    }}>{iniziali(contatto.nome)}{iniziali(contatto.cognome)}</span>
                                </Col>
                                <Col md={10} xs={12}>
                                <h1>{contatto.nome}{" "}{contatto.cognome}</h1>
                                <p>{contatto.telefono ? <span>{contatto.telefono}</span> : null}</p>
                                </Col>
                            </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={contatto.id}>
                        <Card.Body>
                            <Row>
                                <Col sm={6} xs={12} className="buttonContact text-center">
                                   <a href={"tel:+39" + contatto.telefono}> <Button >CHIAMA</Button></a>
                                </Col>
                                <Col sm={6} xs={12} className="buttonContact text-center">
                                    <Button onClick={() => delContact(contatto.id)}>CANCELLA</Button>
                                </Col>
                            </Row>
                            <Card.Text>
                                <CardGroup>
                                <Card className="mb-2">
                                    <Card.Header className="text-center">INDIRIZZO</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <div>
                                                <p><span>Via: </span><span>{contatto.via}</span></p>
                                            </div>
                                                <input type="text" style={editMode}  value={contatto.via} 
                                                onChange={e => {}}
                                                />
                                            <div  style={viewMode}>
                                                <p><span>numero: </span><span>{contatto.numero}</span></p>
                                            </div>
                                                <input type="text" style={editMode} value={contatto.numero}
                                                onChange={e => {}}
                                                />
                                            <div  style={viewMode}>
                                                <p><span>Città: </span><span>{contatto.citta}</span></p>
                                            </div>
                                                <input type="text" style={editMode}  value={contatto.citta}
                                                onChange={e => {}}
                                                />
                                            <div  style={viewMode}>
                                                <p><span>Note: </span><span>{contatto.note}</span></p>
                                            </div>
                                                <input type="text" style={editMode} value={contatto.note}
                                                onChange={e => {}}
                                                />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Header className="text-center">WEB</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                        <div  style={viewMode} >
                                            <p><span>Email: </span><span>{contatto.email}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.email}
                                            onChange={e => {}}
                                            />
                                        <div  style={viewMode}>
                                            <p><span>Sito Web: </span><span>{contatto.website}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.website}
                                            onChange={e => {}}
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Header className="text-center">SOCIAL</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                        <div  style={viewMode}>
                                            <p><span>Facebook: </span><span>{contatto.facebook}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.facebook}
                                            onChange={e => {}}
                                            />
                                        <div  style={viewMode}>
                                            <p><span>Instagram: </span><span>{contatto.instagram}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.instagram}
                                            onChange={e => {}}
                                            />
                                        <div  style={viewMode}>
                                            <p><span>Twitter: </span><span>{contatto.twitter}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.twitter}
                                            onChange={e => {}}
                                            />
                                        <div  style={viewMode}>
                                            <p><span>Linkedin: </span><span>{contatto.linkedin}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.linkedin}
                                            onChange={e => {}}
                                            />
                                        <div  style={viewMode}>
                                            <p><span>TikTok: </span><span>{contatto.tiktok}</span></p>
                                        </div>
                                            <input type="text" style={editMode} value={contatto.tiktok}
                                            onChange={e => {}}
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </CardGroup>
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
            </Accordion>
        </li>
    );
}

export default Contact