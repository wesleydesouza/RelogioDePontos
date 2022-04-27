import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { useState, useEffect } from "react";

const Pontos = (props) =>{

    const [pontos, setPontos] = useState([{}]);
  
    useEffect(() => {
        const minhaLista = localStorage.getItem("pontos");
        setPontos(JSON.parse(minhaLista) || []);
    }, [props.botao]);

    return (
        
        <div>
            <h1>Pontos Batidos</h1>
            <ul>
             {pontos.map((e, key) => <li key={key}>{`${e.hora}:${e.minutos}:${e.segundos}`}</li>)}
            </ul>
        </div>
        
        )
}

export default Pontos;