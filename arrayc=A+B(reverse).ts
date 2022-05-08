let a : number []=[];
let b : number []=[];
let c : number []=[];
let d : number= 0;
let e : number= 1;
let dimensione : number = prompt("inserisci dimentisioni(min 5, max 10)");
if(dimensione>4&&dimensione<11){
    for(let i=0;i<dimensione;i++){
        a[i] = +prompt("Inserisci il valore in posizione"+i+" dell'array A");
        
    }
    for(let i=0;i<dimensione;i++){
        b[i] = +prompt("Inserisci il valore in posizione"+i+" dell'array B");
    }

for(let i=0;i<dimensione;i++){
        c[i] = a[i];
    console.log(c[i]);
    }
    for(let i=0;i<dimensione;i++){
        c[dimensione+d]=b[dimensione-e];
        console.log(c[dimensione+d]);
        d--;
        e++;
        

    }
}else console.log("dimensione non valida");