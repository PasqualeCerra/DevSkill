let a : number []=[];
let b : number []=[];
let c : number []=[];
let dimensione : number = prompt("inserisci dimentisioni(min 5, max 10)");
if(dimensione>4&&dimensione<11){
    for(let i=0;i<dimensione;i++){
        a[i] = +prompt("Inserisci il valore in posizione"+i+" dell'array A");
        
    }
    for(let i=0;i<dimensione;i++){
        b[i] = +prompt("Inserisci il valore in posizione"+i+" dell'array B");
    }

for(let i=0;i<dimensione;i++){
    if(i%2==0){
        c[i] = a[i];
    }else 
    c[i]= b[i];
    console.log(c[i]);
    }
}else console.log("dimensione non valida");