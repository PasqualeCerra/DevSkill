let numero: number = +prompt("Inserisci Numero"); 
let allarme:boolean= false;
let output: number=0;
let multiplicatore : number=10;
if(numero!=-1){
    output=numero;
    numero= +prompt("Inserisci Numero");
    while(numero!=-1){
        if(numero<10){
            output=output*multiplicatore;
            output=output+numero;
            }else allarme=true;
            numero= +prompt("Inserisci Numero");
            }
            if(allarme==false){
                console.log(output);
                if(output%3==0){
                    console.log("SI");
                    
                }else console.log("NO");
                }else console.log("ERRORE");
}else console.log("Vuoto") 




