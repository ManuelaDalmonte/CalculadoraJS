import { estadoOperacao } from "./estadoOperacao.js";
import { atualiza_visor } from "./visor.js";
import { valida_calculo } from "./validacoes.js";

export function calcular(visor){

   
     if(valida_calculo(visor) == true){

        switch(estadoOperacao.operacao){

            case "+":
                
                estadoOperacao.numeroVisor1 = somar()
                break

            case "-":
                estadoOperacao.numeroVisor1 = subtrair()
                break

            case "x":
                estadoOperacao.numeroVisor1 = multiplicar()
                break
            
            case "÷":
                estadoOperacao.numeroVisor1 = dividir()
                break
            
        }

        estadoOperacao.operacao = ""
        estadoOperacao.numeroVisor2 = ""
        estadoOperacao.flagSegundoNumero = false
        estadoOperacao.flagVirgula = false

        atualiza_visor(visor)
    }

}

function somar(){
    return String(Number(estadoOperacao.numeroVisor1) + Number(estadoOperacao.numeroVisor2))
    
}

function subtrair(){
    return String(Number(estadoOperacao.numeroVisor1) - Number(estadoOperacao.numeroVisor2))
}

function multiplicar(){
    return String(Number(estadoOperacao.numeroVisor1) * Number(estadoOperacao.numeroVisor2))
}

function dividir(){
    return String(Number(estadoOperacao.numeroVisor1) / Number(estadoOperacao.numeroVisor2))
}