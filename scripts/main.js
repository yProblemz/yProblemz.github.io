const title = document.querySelector("h1");
title.textContent = "Não clica em mim!";

let cont = 0;
document.querySelector("h1").addEventListener("click", function(){
    const clicou = document.querySelector("h1");
    cont++;
    clicou.textContent = "Você já clicou em mim " + cont + "X!";
    if(cont >= 15){
        clicou.textContent = " Para com isso, já ta chato não ? ";
    }
});

const alterarImagem = document.querySelector("img.myImage");

alterarImagem.onclick = () => {
    const mySrc = alterarImagem.getAttribute("src");
    if(mySrc === "imagens/imagem.jfif"){
        alterarImagem.setAttribute("src", "imagens/avatar.png");
    }
    else{
        alterarImagem.setAttribute("src", "imagens/imagem.jfif");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName(){
    const myName = prompt("Digite o seu nome: ")
    if(!myName){
        setUserName;
    }
    else{   
        localStorage.setItem("name", myName);
        myHeading.textContent = `Bem vindo(a), ${myName}`; 
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem vindo(a) novamente, ${storedName}`;
  }
myButton.onclick = () => {
    setUserName();
}

multiplicador();
function multiplicador(){
    while(true){
        let num1 = prompt("Digite um valor para multiplicação");
        if(num1 >= 0 || num1 <= 0){
            let num2 = prompt("Digite o multiplicador");
            if(num2 >= 0 || num2 <= 0){
                const alterarMult = document.querySelector("p.multi");
                alterarMult.textContent = num1 * num2; 
                break;
            }   else{
                alert("Valor não corresponde com um número, tente novamente!");
            }
        }
        else{
            alert("Valor não corresponde com um número, tente novamente!");
        }
    }
}
let buttonMulti = document.querySelector("button.buttonMulti");
buttonMulti.onclick = () => {
    multiplicador();
}

