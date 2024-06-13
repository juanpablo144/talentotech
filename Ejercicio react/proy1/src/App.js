import { useState, useRef, useEffect } from "react";

function App(props) {
  const [cont, setCont] = useState(3);

  const [info, setInfo] = useState([]);

  const [element, setElem] = useState([]);

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
      console.log(datos)
      setInfo( datos ) ;
    } catch (error) {
      console.log( "ERROR:" + error ) ;
    }
  } ;

  function getDatos(){
    console.log("hola")
    getData();
  }

  useEffect( () => {getDatos();}, [])

  const pId = useRef();

  function verInfo(){
    for (const i of info) {
      if(i.id == pId.current.value){
        console.log("-------" + JSON.stringify(i))
        setElem(i)
      }
    }
  }

  return (
    <div style={estilo}>
      <h1>Hola Clase - {cont}</h1>
      <h3>Hora: {cd.toLocaleTimeString()}</h3>
      <input ref={pId} type="text" placeholder="Buscar por ID" />
      <button onClick={verInfo}>Buscar</button>
      <button onClick={decCont}>Decrementar</button>
      <button onClick={incCont}>Incrementar</button>
      <button onClick={getDatos}>Consultar</button>
      <div>
        <ul>
          {info.map(
            (data,i) => (
              <li key={i}>
                <h3>{data.id}</h3>
                <p>{data.postId}</p>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.body}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
