import React from "react"

const Credits = () => {
  const style = {
    backgroundColor: "rgba(238,238,238,0.6)",
    margin: "50px 0",
    textAlign: "center",
    
  }
  return (
  <div className="credits-container" style={style}>
      <h1>Developer: Marco Ginato</h1>
      <h2>Build with:</h2>
      <h3>React + bootstrap</h3>
  </div>
  );
}
export default Credits