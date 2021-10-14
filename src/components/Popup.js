import React from "react";

const Popup = ({funzione, valore, visual, titolo, messaggio, testo1, testo2}) =>{
    
    const clickHandler = (func, valore) => {
        func(!valore)
    }
    
    return(
        <div className="popup-container" style={valore || visual ? {display: "flex"} : {}}>
            <div className="popup">
                <h2>{titolo}</h2>
                <h3>{messaggio}</h3>
                <p>{testo1}</p>
                <p>{testo2}</p>
                <button onClick={(e) => clickHandler(funzione, valore)}>OK</button>
            </div>
        </div>
    )

}

export default Popup