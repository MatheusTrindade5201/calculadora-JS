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
        escreveNumero(this.value, 'C');
        
    })
}

function escreveNumero(botao, apagar){
    
    if(operação == '' && botao != apagar){
        numero1 = numero1 + botao;
        atualizaTela();
    }else if(operação != '' && botao != apagar){
        numero2 = numero2 + botao
        atualizaTela();
    }

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

