
function bisestile (a:number):number{
     if(a%4==0 && a%100!=0||a%400==0){
    return console.log("anno bisestile");
}
else{
return console.log("non bisestile");}
}
let b :number= prompt("inserisci anno");
bisestile(b);


