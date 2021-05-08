var calcular = document.getElementById('calcular');

//função para calcular imc
function imc(){

//pega os valores do input
    var nome = document.getElementById('nome').value; 
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if(nome !== '' && idade !== '' && peso !== '' && altura !== ''){
        alert('valor preenchido');
    }else{
        alert('valor não preenchido');
    }

}