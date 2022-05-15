let nome:string[]=[];
let attacco:number[]=[];
let difesa:number[]=[];
let contenitore:number;
let contenitorinomi:string;
for(let i=0;i<10;i++){
    nome[i]=prompt("inserisci nome giocatore con massimo 20 caratteri");
    while(nome[i].length>20){
        nome[i]=prompt("nome non valido inserire con numero caratteri corretto")
    }
    attacco[i]=+prompt("inserisci valore offensivo");
    difesa[i]=+prompt("inserisci valore difensivo");
}

for(let i=0;i<9;i++){
    for(let j=i+1;j<10;j++){
        if(attacco[i]<attacco[j]||(attacco[i]==attacco[j]&&difesa[i]>difesa[j]||(attacco[i]==attacco[j]&&difesa[i]==difesa[j]&&nome[i]>nome[j]==true)){
            
            contenitore=attacco[i];
            attacco[i]=attacco[j];
            attacco[j]=contenitore;
            contenitore=difesa[i];
            difesa[i]=difesa[j];
            difesa[j]=contenitore;
            contenitore=nome[i];
            nome[i]=nome[j];
            nome[j]=contenitore;

        }
    }
    
}

let ordinati: string[] =[];
for(let i=0;i<5;i++){
    ordinati[i]=nome[i];
    }
    console.log("gli attaccanti sono:"+ordinati.sort());
    

for(let i=5;i<10;i++){
    ordinati[i-5]=nome[i];
}
console.log("i difensori sono:"+ordinati.sort());

//console.log(attacco);
//console.log(nome);
//console.log(difesa);






