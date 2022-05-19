let controllocrescente:boolean=false;
let controllodecrescente:boolean=false;
let allarme:boolean=false;
let numero: number = + prompt("inserisci numero");
let numeroprecedente: number = numero;
if(numero!=0){
    numero= + prompt("inserisci numero");
    while(numero!=0){
        if(allarme==false){
            if(controllocrescente==false && numeroprecedente> numero || controllodecrescente==true && numeroprecedente<numero || numero==numeroprecedente){
                allarme=true;
            }else if(numeroprecedente<numero){
                controllocrescente=true;
                }else if(numeroprecedente>numero && controllocrescente==true){
                    controllodecrescente=true;
                    }
        numeroprecedente=numero;
        }
        numero= + prompt("inserisci numero");


        
        
    }
}
if(controllocrescente==true && controllodecrescente==true && allarme==false ){
    console.log("SI");
}else console.log("NO");
