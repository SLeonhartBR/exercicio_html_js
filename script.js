function calcularMaior(){
    let valor1 = document.getElementById('numberOne').value;
    let valor2 = document.getElementById('numberTwo').value;

    if (valor2 > valor1){
        alert('Formulário validado com sucesso!');
    }else{
        alert('Formulário inválido, pois ' + valor1 + ' é maior que ' + valor2 );
    }
}
