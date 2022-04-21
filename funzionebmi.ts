function bmi(a:number,b:number){ 
a=a*0.3;
b=b*0.4;
let c :number;
c=b/(a*2);
if(c<16.5){
    console.log("Sottopeso severo");
}else if(c>=16.5 && c<=18.4){
    return console.log("Sottopeso");
}else if(c>=18.5 && c<=24.9){
    return console.log("Normale");
}else if(c>=25 && c<=30){
    return console.log("Sovrappeso");
}else if(c>=30.1 && c<=34.9){
    return console.log("Obesità primo grado");
}else if(c>=35 && c<=40){
    return console.log("Obesità secondo grado");
}else if(c>40){
    return console.log("gskianto");
}
}

function polso(y:number,s:string){
    if(s=="f"){
        if(y<15){
            return console.log("Esile");
        }
        if(y>=15&&y<=16){
            return console.log("Normale");
        }
        if(y>16){
            return console.log("Robusta");
        }
    }
    if(s=="m"){
        if(y<17){
            return console.log("Esile");
        }
        if(y>=17&&y<=18){
            return console.log("Normale");
        }
        if(y>18){
            return console.log("Robusta");
        }
    }
}

let altezza :number=prompt("inserisci altezza in piedi"); 
let peso :number=prompt("inserisci peso in libbre");
bmi(altezza,peso);

let continuare:string=prompt("vuoi continuare?si/no");
if(continuare=="si"){
    
    let pols:number= prompt("circonferenza polso cm");
    let sesso:string =prompt("inserisci sesso (m o f)");
    polso(pols,sesso);

        }else console.log("Va bene bello");
