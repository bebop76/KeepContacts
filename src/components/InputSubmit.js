import React from 'react';

const InputSubmit = ({nome, metodo, tipo}) => {
    let btnStyle = {}
    if (nome === 'IMPORT'){
            btnStyle = {
               width: "100%",
               height: "250px",
               borderRadius: "10px"
           }
        }
    if (nome === 'SAVE / EXPORT'){
        btnStyle = {
            width: "100%",
            height: "250px",
            borderRadius: "10px"
        }
    }
    if (nome === '+'){
        btnStyle = {
            width: "100px",
            height: "auto",
            borderRadius: "100%",
            position: "fixed",
            bottom: "50px",
            right: "30px",
            fontSize: "50px",
            backgroundColor: "rgba(240, 130, 15, 0.8)",
            color: "#eeeeee"

        }
    }
    
    return(
        <>
        <button onClick={metodo}  style={btnStyle} className="input-submit" type={tipo} >{nome}</button>
        </>
    )
}

export default InputSubmit