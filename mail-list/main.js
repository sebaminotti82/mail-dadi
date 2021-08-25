
// creiamo le nostre variabili che saranno poi i nostri bottoni per verificare od annullare
// l'operazione di verifica
var verifica = document.getElementById('verifica')
var reload = document.getElementById('reload')
//-----------------------------------------------------------
//-----------------------------------------------------------

// creiamo ora il collegameno tra il bottone verifica ed i dati inseriti nel nostro form
verifica.addEventListener('click',function(){
var cognome =document.getElementById('cognome').value
var mail = document.getElementById('mail').value
var nome = document.getElementById('nome').value;

//-----------------------------------------------------------
//-----------------------------------------------------------
// creiamo la nostra mail list per accedere al servizio
var listaMail = [
'elisa.vercesi@gmail.com',
'eli.curcio@gmail.com',
'seba.minotti@gmail.com',
'eli.azzarito@gmail.com',
'matteo.ferrarotto@gmail.com',
'oliver.minotti@gmail.com']

if(!mail.includes('@')){
   document.getElementById('errore').innerHTML='ATTENZIONE !! LA MAIL DEVE  CONTENERE ALMENO UNA @ PER POTER ESSERE VERIFICATA . RIPETI L\' OPERAZIONE!!'
}

// fine mail list---------------------------------------------
//------------------------------------------------------------
// variabile d'appoggio per verificare se la mail è trovata o no ! potrei
// anche non utilizzarla ma con il ciclo for farebbe controlli quanto la lunghezza dell'array
// se usassi un alert ad esempio uscirebbero 6 alert
 
var verifica // <-- variabile d'appoggio
// ciclo for per ciclare nell'intero array di mail
for(var i = 0; i < listaMail.length; i++){

    if(mail == listaMail[i]){
        verifica = true
        // con l'if andiamo a verificare che la mail sia trovata !! dicendo true alla variabile
        // d'appoggio e cioè = verifica
    }
  }

  
   
//   se verifica è == true allora la mail è inserita e presente nella lista quindi si potrà accedere al servizio
//   altrimenti sara vietato l'accesso
if(verifica ==true){
    document.getElementById('esito').innerHTML='<h3 class="blu">ACCESSO CONSENTITO  <i class="fas fa-lock-open"></i></h3>'+" "+ 'BENVENUTO-A :'+' '+nome +" " + cognome
  } else if((verifica != true)){
   document.getElementById('esito').innerHTML='<h3>ACCESSO NON CONSENTITO <i class="fas fa-lock"></i></h3>'+" "+ 'MI SPIACE LA SUA MAIL NON E\' STATA RICONOSCIUTA'
  } 

  document.getElementById('visibile').style.display='block'

})
reload.addEventListener('click',function(){
    alert('hai annullato l\'operazione')
    location.reload()
})