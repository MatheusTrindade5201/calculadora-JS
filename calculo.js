var numeros = document.querySelectorAll('.tecla');

var tela = document.querySelector('#tela-calculadora');

var numero1 = '';
var numero2 = '';
var operação = '';
var resultado = '';
tela.value = numero1



//Escreve numeros na tela:
for(var i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(){

        limpaTela(this.value, 'C');

        if(operação == '' && this.value != 'C'){
            numero1 = numero1 + this.value;
            atualizaTela();
        }else if(operação != '' && this.value != 'C'){
            numero2 = numero2 + this.value
            atualizaTela();
        }
    })
}


function atualizaTela(){

    tela.value = numero1 + ' ' + operação + ' ' + numero2;


}

function limpaTela(botao, apagar){

    if(botao == apagar){
        numero1 = '';
        numero2 = '';
        operação = '';
    }

    atualizaTela();

}