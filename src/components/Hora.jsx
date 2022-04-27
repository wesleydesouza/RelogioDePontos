import { useEffect, useState } from "react";
import Botao from "./Botao/Botao"
const Hora = ()=>{

    const date = new Date();

    const [horaAtual, setHoraAtual] = useState({
        hora: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds()
    });
    
    
    useEffect(()=>{
    }, [horaAtual])
    
    useEffect(() => {
        const hora = setInterval(() => {
            const date = new Date();
            setHoraAtual({
                hora: date.getHours(),
                minutos: date.getMinutes(),
                segundos: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(hora);
    }, []);

    

    return(
        <>
        <h1>{horaAtual.hora}:{horaAtual.minutos}:{horaAtual.segundos}</h1>
        <Botao hora={horaAtual}/>
        </>
    )
    
}

export default Hora;