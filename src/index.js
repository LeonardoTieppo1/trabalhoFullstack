import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Desenhalista from './list/DesenhaLista';
const root = ReactDOM.createRoot(document.getElementById('root'));
const isProfessor = true;

root.render(
  <React.StrictMode>
    <button className="btn btn-primary">Olá Mundo</button>
    {isProfessor && <h1>Professor</h1>}
    {!isProfessor && <button className="btn btn-primary">Aluno</button>}
    <h1>{isProfessor ? "Professor" : "Aluno"}</h1>
    <Desenhalista itens={["Arroz","Feijão"]}>Lista de Compras</Desenhalista>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
