import { digitar_numero } from "./visor.js"
import { digitar_operacao } from "./visor.js"
import { estadoOperacao } from "./estadoOperacao.js"
import { atualiza_visor } from "./visor.js"
import { apagador } from "./visor.js"
import { calcular } from "./calculos.js"

const botoesNumeros = document.querySelectorAll(".botao_numero")
const botoesOperacoes = document.querySelectorAll(".botao_operacao")
const botoesApagador = document.querySelectorAll(".botao_apagador")
const botaoSubmit = document.querySelector(".botao_submit")
const visor1 = document.querySelector("#visorNumero1")

botoesNumeros.forEach(botaoNumero => {
    botaoNumero.addEventListener("click", () => {

        digitar_numero(botaoNumero.innerText, visor1)
        
    })

})

botoesOperacoes.forEach(botaoOperacao => {
    botaoOperacao.addEventListener("click", () => {
        
        digitar_operacao(botaoOperacao.innerText, visor1)

    })
})

botoesApagador.forEach(botaoApagador => {
    botaoApagador.addEventListener("click", () => {

        apagador(botaoApagador.innerText, visor1)

    })

})

botaoSubmit.addEventListener("click", () => { 
    calcular(visor1)
})

console.log(visor1.style.fontSize)