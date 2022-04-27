let a:number= prompt("inserisci numero")*1;
let y:number;
if(a==-1){
    console.log("Dati non sufficienti") ;   
}else{
    y=a;
    while(a!=-1){
        if(y<a){
            y=a;
            }
            a=prompt("inserisci numero")*1;

        }
     console.log(y);
     }