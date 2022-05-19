let a : number=+prompt("Inserisci N");
let contatore : number= 0;
let controllo : boolean= false;
let b : number=+prompt("Inserisci sequenza");
while (b!=-1){
    if(b<=a){
    contatore++;
    }else contatore=0;
    if(contatore>=a){
    controllo=true;}
    b=+prompt("Inserisci sequenza");
}
if(controllo==true){
    console.log("OK");
}else console.log("NO");
