var numeros = document.querySelectorAll('.tecla');

var tela = document.querySelector('#tela-calculadora');

console.log(numeros);

for(var i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', function(){
        if(this.value != 'C'){
            tela.value = this.value;
            
        }else{
            tela.value = '';
        }
    })
}