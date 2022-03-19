function computerPlay(){
    var n=Math.random()
    if (n <(1/3)){
        var computer= 'a';       //'Piedra'
        console.log( 'Computadora elige Piedra');
    }else if (n>=(1/3) && n<(2/3)){
        var computer = 'b';      //'Papel'
        console.log( 'Computadora elige Papel');
    }else{
        var computer= 'c';       //'Tijera'
        console.log( 'Computadora elige Tijera');
    }
}

function playerPlay(){
    var option= prompt('Ingrese opcion');
        
    if (option.toUpperCase()=='PIEDRA'){
        var player='a';
        console.log(`La opcion elegida es ${option}`); 
        computerPlay();
        
    }else if(option.toUpperCase()=='PAPEL'){
        var player='b';
        console.log(`La opcion elegida es ${option}`);
        computerPlay();
    }else if(option.toUpperCase()=='TIJERA'){
        var player='c';
        console.log(`La opcion elegida es ${option}`);
        computerPlay();
    }else{
        console.log('Error. Ingresar PIEDRA, PAPEL, o TIJERA');
        return playerPlay();
        
    }
}

function jugar(){
    var final=0;
    for (i=1;i<=5;i++){
        playerPlay();
        if (computer===player){
            var result=0;
            console.log (`Juego ${i}.Empate`);
        }else if ((computer==='a' && player=='b') ||(computer==='b' && player=='c') || (computer==='c' && player=='a')){
            var result=1;
            console.log (`Juego ${i}.Gana Jugador`);
        }else{
            var result=-1;
            console.log (`Juego ${i}.Gana computadora`);
        }
        final=final +result;
    }
    
    if (final>0){
        return `Puntaje final ${final}. Gana Jugador!!!`;
    }else if(final===0){
        return `Puntaje final ${final}. Empate`;
    }else{
        return `Puntaje final ${final}. Gana computadora`;
    }
}