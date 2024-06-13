import { useState } from "react";

function App(props) {
  const [cont, setCont] = useState(3);

  let incCont = () => {
    setCont(cont + 1);
  };

  let decCont = () => {
    setCont(cont - 1);
  };

  const cd = new Date();

  const estilo = {
    color: props.c,
    fontSize: props.t,
  };

  async function getData() {
    try {
      const rta = await fetch( 'http://jsonplaceholder.typicode.com/posts/1/comments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      } ) ;

      if( !rta.ok ) {
        throw new Error( "Er:" + rta.error ) ;
      }
      let datos = await rta.json() ;
      console.log(JSON.stringify(datos))
    //setInfo( datos ) ;
    } catch (error) {
      console.log( "ERROR:" + error ) ;
    }
  } ;

  function getDatos(){
    getData();
  }

  return (
    <div style={estilo}>
      <h1>Hola Clase - {cont}</h1>
      <h3>Hora: {cd.toLocaleTimeString()}</h3>
      <button onClick={decCont}>Decrementar</button>
      <button onClick={incCont}>Incrementar</button>
      <button onClick={getDatos}>Consultar</button>
    </div>
  );
}

export default App;
