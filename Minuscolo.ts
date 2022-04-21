function minuscolo (nome:string,cognome:string):string{
    let nomecognome :string= nome+" "+cognome;
    return console.log(nomecognome.toLowerCase());

}

let Nome:string = prompt("Inserisci Nome");
let Cognome:string = prompt("Inserisci Cognome");

minuscolo(Nome,Cognome);
