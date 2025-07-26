function calcular() {

    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let idade = Number(document.getElementById('idade').value);

    

    let resultadoImc = document.getElementById('imc');
    let resultadoClass = document.getElementById('classificacao');
    let resultadoIdade = document.getElementById('idadetxt');
    let resultadoDescr = document.getElementById('descricao');

    const calculoImc = peso / (altura * altura);
    const calculoImc2 = calculoImc.toFixed(2);

    if (!peso || !altura || !idade) {
        
    resultadoImc.innerHTML = 'Preencha todos os campos';
    resultadoImc.style.color = "yellow";
    resultadoClass.innerHTML = "";
    resultadoIdade.innerHTML = "";
    resultadoDescr.innerHTML = "";
    return;

    } else if (calculoImc2 <= 18.4) {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #ff9895ff">Abaixo do peso</strong>';

    } else if (calculoImc2 >= 18.5 && calculoImc2 <= 24.9) {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #95ff5c ">Peso ideal</strong>';

    } else if (calculoImc2 >= 25 && calculoImc2 <= 29.9) {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #f7ff62">Sobrepeso</strong>';

    } else if (calculoImc2 >= 30 && calculoImc2 <= 34.9) {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #ff7c3b">Obesidade grau 1</strong>';

    } else if (calculoImc2 >= 35 && calculoImc2 <= 39.9) {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #ff7c3b">Obesidade grau 2</strong>';

    } else {

        resultadoImc.innerHTML = `Seu IMC é de:  <strong style="color: #00D4FF">${calculoImc2}</strong>`;
        resultadoClass.innerHTML = '<strong style="color: #ff3232">Obesidade grau 3</strong>';

    }

       if (idade >= 1 && peso == '' && altura == '') {

        resultadoImc.innerHTML = 'Preencha todos os campos';
        resultadoClass.innerHTML = "";
        resultadoIdade.innerHTML = "";
        resultadoDescr.innerHTML = "";

       } else if (peso >= 1 && idade == '' && altura == '') {

        resultadoImc.innerHTML = 'Preencha todos os campos';
        resultadoClass.innerHTML = "";
        resultadoIdade.innerHTML = "";
        resultadoDescr.innerHTML = "";

       } else if (altura >= 1 && peso == '' && idade == '') {

        resultadoImc.innerHTML = 'Preencha todos os campos';
        resultadoClass.innerHTML = "";
        resultadoIdade.innerHTML = "";
        resultadoDescr.innerHTML = "";

       } else if (idade <= 20) {

        resultadoIdade.innerHTML = `<strong style="color: #EA00FF">${idade} anos de idade</strong>`;
        resultadoDescr.innerHTML = " O IMC em jovens varia conforme o crescimento e o sexo. O peso ideal nessa fase é aquele que acompanha o desenvolvimento saudável sem excessos ou carências. É fundamental contar com avaliação pediátrica ou nutricional.";

    }  else if (idade >= 20 && idade <= 59) {


        resultadoIdade.innerHTML = `<strong style="color: #EA00FF">${idade} anos de idade</strong>`;
        resultadoDescr.innerHTML = " Para adultos, o peso ideal é quando o IMC está entre 18,5 e 24,9, indicando equilíbrio entre massa corporal e altura. Isso ajuda na prevenção de doenças como diabetes e hipertensão. Alimentação balanceada e atividade física são essenciais";
    } else {

        resultadoIdade.innerHTML = `<strong style="color: #EA00FF">${idade} anos de idade</strong>`;
        resultadoDescr.innerHTML = " Em idosos, o peso ideal leva em conta mais do que o IMC. Uma leve variação acima de 25 pode ser aceitável se houver boa saúde e autonomia. O importante é manter a funcionalidade e evitar perda de massa muscular.";

    }
         
}


function resetar() {

    document.getElementById('imc').innerHTML = "";
    document.getElementById('classificacao').innerHTML = "";
    document.getElementById('idadetxt').innerHTML = "";
    document.getElementById('descricao').innerHTML = "";

    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('idade').value = "";
  

}