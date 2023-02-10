
function exibirMsg(){
    alert('FON');
}

const btn = document.querySelector('#msg');
btn.addEventListener("click",exibirMsg);

const btn2 = document.querySelector('#body')
btn2.addEventListener('click',cor)

function cor(){
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('#titulo').style.color='white';
}