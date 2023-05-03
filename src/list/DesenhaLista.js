import React from "react";
import "./DesenhaLista.css";

const Desenhalista = (props) => {
    console.log(props);
  return(<> 
  <div className="titulo">{props.children}
    </div>
  <ul>
    {props.itens.map((item) => <li key={item}>{item}</li>)}
  </ul>
  </>
  )
}

export default Desenhalista;