//First Class Functions
//High Order Function
//quer dizer: função pode ser atribuida a uma variavel, usada como parametro, e retornar como resposta

function falarMeuNome(){
    console.log(`Meu nome é Davi`)
}

function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log(`Gonçalves Friggi`)
}

falarMeuNomeCompleto(falarMeuNome)

/*Function declaration é uma função declarada "function nomeDaFuncao (){}" e sofre o efeito do hoisting (permite
o "chamamento" anterior a declaração da própria função); Já a function expression não, pois é a atribução de uma 
função a uma variável, logo não permite o processo de hoisting.*/