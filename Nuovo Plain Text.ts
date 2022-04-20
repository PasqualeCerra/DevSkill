let a :number=prompt("inserisci altezza in piedi"); 
let b :number=prompt("inserisci peso in libbre"); 
a=a*0.3;
b=b*0.4;
//console.log(a);
//console.log(b);
let c :number;
c=b/(a*2);
//console.log(c); 
if(c<16.5){
    console.log("Sottopeso severo");
}else if(c>=16.5 && c<=18.4){
    console.log("Sottopeso");
}else if(c>=18.5 && c<=24.9){
    console.log("Normale");
}else if(c>=25 && c<=30){
    console.log("Sovrappeso");
}else if(c>=30.1 && c<=34.9){
    console.log("Obesità primo grado");
}else if(c>=35 && c<=40){
    console.log("Obesità secondo grado");
}else if(c>40){
    console.log("gskianto");
}
let x :string=prompt("vuoi continuare?si/no");
if(x=="si"){
    let y:number= prompt("circonferenza polso cm");
    let s:string =prompt("inserisci sesso (m o f)");
    if(s=="f"){
        if(y<15){
            console.log("Esile");
        }
        if(y>=15&&y<=16){
            console.log("Normale");
        }
        if(y>16){
            console.log("Robusta");
        }
    }
    if(s=="m"){
        if(y<17){
            console.log("Esile");
        }
        if(y>=17&&y<=18){
            console.log("Normale");
        }
        if(y>18){
            console.log("Robusta");
        }
    }
        
}else console.log("Va bene bello");


