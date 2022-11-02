const pessoas = [
    { name: "Fabiana Araujo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 }
];

//funcao para procurar os dados da pessoa a partir do nome, usando FIND
function imprimeDados(nome) {
    return pessoaProcurada = pessoas.find(pessoa => pessoa.name === nome);
}
//o console abaixo é para executar o metodo 'imprimeDados()', digite entre as aspas o nome desejado
//console.log(imprimeDados("Geralda do Nascimento"));


//funcao para retornar um vetor com o primeiro nome das pessoas contidas no array, usando SPLIT
function retornaNomes() {
    return exibeInformacoes = pessoas.map(pessoa => `${pessoa.name.split(' ')[0]}`);
}
//o console abaixo é para executar o metodo 'retornaNomes()'
//console.log(retornaNomes());


//funcao para adicionar um ID especifico para cada pessoa do array, usando FOR
function adicionaID() {
    for (let i = 0; i < pessoas.length; i++) {
        pessoas[i] = { Id: (i+1), name: pessoas[i].name, age: pessoas[i].age };
    }
    return pessoas;
}
//o console abaixo é para executar o método 'adicionaID()'
//console.log(adicionaID());


//funcao para retornar os dados das pessoas que tem idade suficiente para tirar a primeira habilitacao, usando FILTER
function maioresDeIdade() {
    return maioresDeIdade = pessoas.filter(pessoa => (pessoa.age > 17));
}
//o console abaixo é para executar o metodo 'maioresDeIdade()'
//console.log(maioresDeIdade());


//funcao para retornar a media de idade das pessoas do array
function mediaDeIdade(){
const total = pessoas.reduce((resultado, pessoa) => { return (resultado + pessoa.age)}, 0);
return media = total/pessoas.length;
}
//o console abaixo é para executar o metodo 'mediaDeIdade()'
//console.log(mediaDeIdade());
