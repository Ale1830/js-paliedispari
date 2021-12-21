let parola = prompt("inserisci una parola palindroma!");
let parolaDivisa = parola.split('');

let alContrario=[];



function controllo(){

  for(i=0; i<parolaDivisa.length; i++){    
    //  console.log(parolaDivisa[i]);
  
  }  
    
  for(let index=parolaDivisa.length -1 ; index>=0; index--){
         
      alContrario.push(parolaDivisa[index]);
  }  



  console.log(parolaDivisa, alContrario);    
  

  
  if(parolaDivisa.toString()==alContrario.toString()){

     return "parola palindroma";

  }else{

     return "parola NON palindroma"   ;

  }    
}

document.writeln(controllo());

