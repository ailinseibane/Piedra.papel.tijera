
const div=document.querySelector('.div');
console.log(div);

const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const btn3=document.querySelector('#btn3');


btn1.addEventListener('click',click);
btn2.addEventListener('click',click);
btn3.addEventListener('click',click);

const msg=document.createElement('div');
msg.setAttribute('id','msg1');
div.appendChild(msg);
msg.textContent=('')

const msg2=document.createElement('div');
msg2.setAttribute('id','msg2');
div.appendChild(msg2);
msg2.textContent=('')

const msg3=document.createElement('h2');
msg3.setAttribute('id','msg3');
div.appendChild(msg3);
msg3.textContent=('')

const msg4=document.createElement('div');
msg4.setAttribute('id','msg4');
div.appendChild(msg4);
msg4.textContent=('')

final=0
function click(e){
    if(e.target.id==='btn1'){
        var player='a'
        msg.textContent=('Usted ha elegido la opción PIEDRA')
        
    }else if (e.target.id==='btn2'){
        var player='b'
        msg.textContent=('Usted ha elegido la opción PAPEL')
        
    }else if (e.target.id==='btn3'){
        var player='c'
        msg.textContent=('Usted ha elegido la opción TIJERA')
        
    }else{}

    computer=computerPlay();

    if (computer===player){
        var result=0;
        msg3.textContent=(`Empate`);
    }else if ((computer==='a' && player=='b') ||(computer==='b' && player=='c') || (computer==='c' && player=='a')){
        var result=1;
        msg3.textContent=(`Gana Jugador`);
    }else{
        var result=-1;
        msg3.textContent=(`Gana computadora`);
    }
    final=final +result;
    msg4.textContent=(`Puntaje final: ${final}`);

    
}

function computerPlay(){
    var n=Math.random()
    if (n <(1/3)){
        var computer= 'a';       //'Piedra'
        msg2.textContent=('Computadora ha elegido la opción PIEDRA')
        
        return computer
    }else if (n>=(1/3) && n<(2/3)){
        var computer = 'b';      //'Papel'
        msg2.textContent=('Computadora ha elegido la opción PAPEL')
        
        return computer
    }else{
        var computer= 'c';       //'Tijera'
        msg2.textContent=('Computadora ha elegido la opción TIJERA')
        
        return computer
    }
}



