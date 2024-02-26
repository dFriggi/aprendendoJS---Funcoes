function funcao1 (){
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const davi = {
    nome: "Davi",
    funcao1,
    funcao2
}

davi.funcao1()
davi.funcao2()

/*a diferença entre function e arrow function é que além de reduzir sintaxe, a arrow function não tem um
contexto (this), por isso que no código a função1 consegue passar os parâmetros do objeto utilizando o "this",
diferentemente da função que não entende recebe o "this".*/