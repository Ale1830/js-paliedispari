let scelta = prompt("scegli pari o dispari");
let sceltaNum = parseInt(prompt("scegli un numero da 1 a 5"));
let computerNum = Math.floor(Math.random() * 5)+1;
let tot = sceltaNum + computerNum;



function myFunction(){
   if(tot%2==0 && scelta=="pari"){
      return ("pari!, HAI VINTO")
   }else if(tot%2!=0 && scelta=="pari"){
       return ("dispari! HAI PERSO")
   }else if(tot%2!=0 && scelta=="dispari"){
       return("dispari! HAI VINTO")
   }else if(tot%2==0 && scelta=="dispari"){
       return("pari! HAI PERSO")
   }
};
document.writeln(scelta,' ',sceltaNum,' ',computerNum,' ',tot,' ',myFunction());
