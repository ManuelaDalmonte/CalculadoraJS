//nesse arquivo há todas as funções que se responsabilzam por validação de entradas da calculadora
import { estadoOperacao } from "./estadoOperacao.js"
import { voltar_numero } from "./visor.js"

export function valida_numero(numeroBotao){
    if(numeroBotao == '.' && estadoOperacao.flagVirgula == false){
        estadoOperacao.flagVirgula = true
        return true
    } else if (numeroBotao != '.'){
        return true
    } else return false
}

export function valida_apagar(){
    if(estadoOperacao.numeroVisor1 == "") return false
    else return true
}

export function valida_operacao(){
    if(estadoOperacao.numeroVisor1.at(-1) == ".") return false
    else if(estadoOperacao.numeroVisor1 == "") return false
    else return true
}

export function valida_calculo(visor){
    if(estadoOperacao.numeroVisor2 == ""){
        estadoOperacao.numeroVisor2 = estadoOperacao.numeroVisor1
        return true
    }
    else if(estadoOperacao.operacao == "÷" && estadoOperacao.numeroVisor2 == "0"){
        visor.innerText = "Não é possível dividir \n     por zero 💔"
        visor.style.color = "red"
        visor.style.textAlign = "center"
        setTimeout(voltar_numero, 1000, visor)
        return false
    } 
    else return true

}