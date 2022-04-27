import React from "react";
import { useEffect, useState } from "react";
import Pontos from "../Pontos/Pontos";

const Botao = (props)=> {
    
    const [pontos, setPontos] = useState([]);
    const horaAtual = props.hora;
    
    useEffect(() => {
        const minhaLista = localStorage.getItem("pontos");
        setPontos(JSON.parse(minhaLista) || []);
    }, [])

    function addPonto(){
        setPontos([...pontos, {hora: horaAtual.hora, minutos: horaAtual.minutos, segundos: horaAtual.segundos}]);
        localStorage.setItem("pontos", JSON.stringify(pontos));
    };


    return (
        <div>
            <button onClick={addPonto}>Bater Ponto</button>
            <Pontos botao={addPonto}/>
        </div>
    )
}

export default Botao;