var start = document.getElementById('start')



var numeroUmano = Math.floor(Math.random()*(1,6)+1)
console.log(numeroUmano);

var numeroPc = Math.floor(Math.random()*(1,6)+1)
console.log(numeroPc);


start.addEventListener('click',function(){

   


document.getElementById('numeroPc').innerHTML =numeroPc
document.getElementById('numeroUmano').innerHTML=numeroUmano

document.getElementById("dado1").style.transform = "rotate3d(1,1,1, 360deg)";
document.getElementById('dado1').style.transition='4s';

document.getElementById("dado2").style.transform = "rotate3d(1,1,1, 360deg)";
document.getElementById('dado2').style.transition='4s';
 


setTimeout(() => {
    
    if(numeroUmano > numeroPc){
        document.getElementById('vincitore').innerHTML='MA BRAVO HAI VINTO CONTRO IL PC '
    }else if(numeroPc > numeroUmano ){
        document.getElementById('vincitore').innerHTML='MI SPIACE MA IL PC HA VINTO'
    } else {
        document.getElementById('vincitore').innerHTML='WEEE UN BEL PAREGGIO CI STA '
    }

    document.getElementById("numeroPc").style.filter = "none";
    document.getElementById("numeroPc").style.transition = "1.5s";

    document.getElementById("numeroUmano").style.filter = "none";
    document.getElementById("numeroUmano").style.transition = "1.5s";
  
},4000);




})



var reload = document.getElementById('reload')

reload.addEventListener('click',function(){
    location.reload()
})

