//capturar o evento de submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
   const inputPeso = event.target.querySelector('#peso');
   const inputAltura = event.target.querySelector('#altura');

   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);
   
   if(!peso) {
    setResultado('peso invalido, false');
    return;
   }

   if(!altura) {
    setResultado('Altura invalida,false');
    return;
   }
    
   const imc = getImc(peso, altura);
   const nivelImc = getNivelImc(imc);

   const mensagem = `Seu Imc e ${imc} ( ${nivelImc}).`;
   setResultado(mensagem, true);

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso' , 'peso normal' , 'sobrepeso' ,
    'obesidade grau 1' , 'obesidade grau 2', 'obesidade grau 3'];
    if (imc >= 39.9) return  nivel [5];
     if (imc >= 34.9) return nivel[4];
     if (imc >= 29.9) return nivel [3];
     if (imc >= 24.9 ) return nivel [2];
     if (imc >= 18.5) return nivel [1];
     if (imc < 18.5) return nivel [0];
    
}

function getImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP(){
const p = document.createElement('p');
return p;

}

function setResultado (mensagem, isValid){
    const Resultado = document.querySelector('#resultado');
    Resultado.innerHTML='';

    const p = criaP();

if (isValid) {
p.classList.add('paragrafo-resultado');
} else {
    p.classList.add('bad');
}


p.innerHTML = mensagem;
Resultado.appendChild(p);
}
