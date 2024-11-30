//Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo(){
    console.log('Olá, Mundo!');
}
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumnero(numero){
    return numero * 2;
    
}
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDosNumeros(n1,n2,n3){
    let somar = n1+n2+n3;
    return somar / 3;
}
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(n1,n2){
   maior= n1 > n2 ? n1:n2;
   maior= n1 == n2 ? 'Numeros iguais': maior; 
    return maior; 
}
//Criar uma função que recebe um número como parâmetro
// e retorna o resultado da multiplicação desse número por ele mesmo
function numeroAoQuadrado(number){
    return number*number;
}

//usando as funções
//1
exibirOlaMundo();
//2
exibirNome('Alura');
//3
console.log(dobrarNumnero(6));
//4
console.log(mediaDosNumeros(6,6,6));
//5
console.log(retornaMaior(20,20));
console.log(retornaMaior(2,4));
//6
console.log(numeroAoQuadrado(10));