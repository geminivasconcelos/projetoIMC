var calcular = document.getElementById('calcular');

//função para calcular imc

function imc(){
//pega os valores do input
    var nome = document.getElementById('nome').value; 
    var idade = document.getElementById('idade').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultado = document.getElementById('resultado');

    

    if(nome !== '' && idade !== '' && altura !== '' && peso !== ''){

        var imcCalculo = (peso/(altura*altura)).toFixed(2);

        let classificacao = '';

        if(imcCalculo < 16){
            classificacao = 'baixo peso muito grave';
        }
        if(imcCalculo >= 16 && imcCalculo <= 16.99){
            classificacao = 'baixo peso grave';
        }
        if(imcCalculo >= 17.00 && imcCalculo <= 18.49){
            classificacao = 'baixo peso';
        }
        if(imcCalculo >= 18.50 && imcCalculo <= 24.99){
            classificacao = 'peso normal';
        }
        if(imcCalculo >= 25 && imcCalculo <= 29.99){
            classificacao = 'sobrepeso';
        }
        if(imcCalculo >= 30 && imcCalculo <= 34.99 ){
            classificacao = 'obesidade grau 1';
        }
        if(imcCalculo >= 35 && imcCalculo <= 39.99){
            classificacao = 'obesidade grau 2';
        }
        if(imcCalculo >= 40){
            classificacao = 'obesidade grau 3';
        }

        resultado.textContent = `${nome} seu IMC é ${imcCalculo} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}
calcular.addEventListener('click', imc);