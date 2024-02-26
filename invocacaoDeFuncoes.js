/* apply: "NOME DA FUNÇÃO . apply (CONTEXTO , PARÂMETOS em formato de ARRAY)"; assim podemos invocar de maneira dinâmica as funções,
diferente do call que não precisa informar os parâmetros em formato de ARRAY*/
const pessoa = {
    nome: "Davi",
    idade: 18
}

function falar(recebeDoApply){
    console.log(recebeDoApply , this.nome)
}

falar("Meu nome é")//execução direta

falar.apply(pessoa , ["Meu nome é"])//apply
falar.call(pessoa , "Meu nome é")//call