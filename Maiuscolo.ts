function maiuscolo (nome:string,cognome:string):string{
    let nomecognome :string= nome+" "+cognome;
    return console.log(nomecognome.toUpperCase());

}

let Nome:string = prompt("Inserisci Nome");
let Cognome:string = prompt("Inserisci Cognome");

maiuscolo(Nome,Cognome);
