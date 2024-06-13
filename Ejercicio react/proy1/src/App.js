import { useState } from "react";

function App(props) {

  const [cont, setCont] = useState(3);

  let incCont = () => {
    setCont(cont + 1)
  }

  let decCont = () => {
    setCont(cont - 1)
  }

  const cd = new Date();

  const estilo = {
    color: props.c,
    fontSize: props.t
  };


  return (
   <div style={estilo}>
    <h1>Hola Clase - {cont}</h1>
    <h3>Hora: {cd.toLocaleTimeString()}</h3>
    <button onClick={incCont}>Incrementar</button>
    <button onClick={decCont}>Decrementar</button>
   </div>
  );
}

export default App;
