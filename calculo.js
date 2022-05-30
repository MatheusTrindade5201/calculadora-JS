var numeros = document.querySelectorAll('.tecla');
var comandos = document.querySelectorAll('.tecla-com');

var tela = document.querySelector('#tela-calculadora');

var numero1 = '';
var numero2 = '';
var operação = '';
var resultado = '';

//Escreve numeros na tela:
for(var i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(){
        
        limpaTela(this.value, 'C');
        escreveNumero(this.value, 'C');
        
    })
}

//Define a operação:
for(var i = 0; i < comandos.length; i++){

    comandos[i].addEventListener('click', function(){
        if(this.value == '=' ){
            calcula();
        }else if(numero1 != ''){
            operação = this.value;
            atualizaTela();
        }
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

function calcula(){
    
    converteNumero();

    if(operação == '+'){
        resultado = numero1 + numero2;
        tela.value = resultado;
    }
    if(operação == '-'){
        resultado = numero1 - numero2;
        tela.value = resultado;
    }
    if(operação == '*'){
        resultado = numero1 * numero2;
        tela.value = resultado;
    }
    if(operação == '/'){
        resultado = numero1 / numero2;
        tela.value = resultado;
    }

}

function converteNumero(){
   numero1 = parseFloat(numero1);
   numero2 = parseFloat(numero2);
}

