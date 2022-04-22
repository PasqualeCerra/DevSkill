function convertitore(a:number,b:number,c:string,){
    if(a==1&&c=="C"){
        return b=(1*b* (9/5)) + 32; 

    }else if(a==1&&c=="F"){
        return (1*b - 32) * 5/9;
        }else if(a==2&&c=="KM"){
            return 1*b/1.609;
        }else if(a==2&&c=="MI"){ return 1*b* 1.609;
        }return "Dato non valido"
}

let tipomisurazione:string=prompt("Che tipo di misurazione vuoi convertire?");
//console.log("Inserisci i seguenti valori:");
let misurazioneoriginale:number=prompt("Misurazione originale");
let udmo:string=prompt("Unita` di misura originale");

console.log(convertitore(tipomisurazione,misurazioneoriginale,udmo));
