// nesse arquivo há todas as funções que se responsabilizam pela modificação e atualização dos visores
import { valida_numero } from "./validacoes.js"
import { estadoOperacao } from "./estadoOperacao.js"
import { valida_apagar } from "./validacoes.js"

export function voltar_numero(visor){
    //depois de dar numero invalido, volta o visor pra onde estava para retomar a digitação
    atualiza_visor(visor)
    visor.style.color = "black"
    visor.style.fontSize = "16px"
}

export function digitar_numero(numeroBotao, visor){
    visor.style.color = "black"
    if(estadoOperacao.flagSegundoNumero == false){
        if(numeroBotao == "." && estadoOperacao.numeroVisor1 == ""){
        estadoOperacao.numeroVisor1 = 0
        }
        if(valida_numero(numeroBotao) == true){
            estadoOperacao.numeroVisor1 = `${estadoOperacao.numeroVisor1}${numeroBotao}`
            atualiza_visor(visor)
        }
        else{
            visor.innerText = "Numero inválido!"
            visor.style.color = "red"
            setTimeout(voltar_numero, 1000, visor)
        }
    }

    else if(estadoOperacao.flagSegundoNumero == true){
        if(numeroBotao == "." && estadoOperacao.numeroVisor2 == ""){
        estadoOperacao.numeroVisor2 = 0
        }
        if(valida_numero(numeroBotao) == true){
            estadoOperacao.numeroVisor2 = `${estadoOperacao.numeroVisor2}${numeroBotao}`
            atualiza_visor(visor)
        }
        else{
            visor.innerText = "Numero inválido!"
            visor.style.color = "red"
            setTimeout(voltar_numero, 1000, visor)
        }
    }
}

export function digitar_operacao(operacao, visor){
    estadoOperacao.flagSegundoNumero = true
    estadoOperacao.operacao = operacao
    estadoOperacao.flagVirgula = false

    estadoOperacao.operacao = operacao
    atualiza_visor(visor)
}

export function apagador(modoApagar, visor){
    if(valida_apagar() == true){
        if(modoApagar == "←"){
            if(estadoOperacao.operacao == ""){
                if(estadoOperacao.numeroVisor1.at(-1) == "."){ //se o caractere apagado for a virgula
                    estadoOperacao.flagVirgula = false
                }
                estadoOperacao.numeroVisor1 = estadoOperacao.numeroVisor1.slice(0, -1)
            }
            else if (estadoOperacao.operacao != "" && estadoOperacao.numeroVisor2 == ""){
                estadoOperacao.operacao = ""
                estadoOperacao.flagSegundoNumero = false
            }
            else if (estadoOperacao.operacao != "" && estadoOperacao.numeroVisor2 != ""){
                if(estadoOperacao.numeroVisor2.at(-1) == "."){ //se o caractere apagado for a virgula
                    estadoOperacao.flagVirgula = false
                }
                estadoOperacao.numeroVisor2 = estadoOperacao.numeroVisor2.slice(0, -1)
            }
            atualiza_visor(visor)

        }
        else{
            estadoOperacao.numeroVisor1 = ""
            estadoOperacao.numeroVisor2 = ""
            estadoOperacao.operacao = ""
            estadoOperacao.flagSegundoNumero = false
            estadoOperacao.flagVirgula = false
            atualiza_visor(visor)
        }

    }
}

export function atualiza_visor(visor){
    visor.innerText = `${estadoOperacao.numeroVisor1}${estadoOperacao.operacao}${estadoOperacao.numeroVisor2}`
}

