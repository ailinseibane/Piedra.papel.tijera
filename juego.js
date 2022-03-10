function computerPlay(){
    n=Math.random()
    if (n <(1/3)){
        computer= 'a'       //'Piedra'
        console.log( 'Computadora elige Piedra')
    }else if (n>=(1/3) && n<(2/3)){
        computer = 'b'      //'Papel'
        console.log( 'Computadora elige Papel')
    }else{
        computer= 'c'       //'Tijera'
        console.log( 'Computadora elige Tijera')
    }
}

function playerPlay(){
    option= prompt('Ingrese opcion');
        
    if (option.toUpperCase()=='PIEDRA'){
        player='a'
        console.log(`La opcion elegida es ${option}`); 
        computerPlay();
        
    }else if(option.toUpperCase()=='PAPEL'){
        player='b'
        console.log(`La opcion elegida es ${option}`);
        computerPlay();
    }else if(option.toUpperCase()=='TIJERA'){
        player='c'
        console.log(`La opcion elegida es ${option}`);
        computerPlay();
    }else{
        console.log('Error. Ingresar PIEDRA, PAPEL, o TIJERA')
        return playerPlay();
        
    }
}

function jugar(){
    var final=0
    for (i=1;i<=5;i++){
        playerPlay();

        if (computer===player){
        result=0
        console.log (`Juego ${i}.Empate`)
        }else if ((computer==='a' && player=='b') ||(computer==='b' && player=='c') || (computer==='c' && player=='a')){
        result=1
        console.log (`Juego ${i}.Gana Jugador`)
        }else{
        result=-1
        console.log (`Juego ${i}.Gana computadora`)
        }
        final=final +result
    }
    if (final>0){
        return `Puntaje final ${final}. Gana Jugador!!!`
    }else if(final===0){
        return `Puntaje final ${final}. Empate`
    }else{
        return `Puntaje final ${final}. Gana computadora`
    }
}