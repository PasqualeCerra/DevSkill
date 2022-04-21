function bmi(a:number,b:number){ 
    a=a*0.3;
    b=b*0.4;
    let c :number;
    c=b/(a*2);
    if(c<16.5){
        return "Sottopeso severo";
    }else if(c>=16.5 && c<=18.4){
        return "Sottopeso";
    }else if(c>=18.5 && c<=24.9){
        return "Normale";
    }else if(c>=25 && c<=30){
        return "Sovrappeso";
    }else if(c>=30.1 && c<=34.9){
        return "Obesità primo grado";
    }else if(c>=35 && c<=40){
        return "Obesità secondo grado";
    }else if(c>40){
        return "gskianto";
    }
    }
    
    function polso(y:number,s:string){
        if(s=="f"){
            if(y<15){
                return "Esile";
            }
            if(y>=15&&y<=16){
                return "Normale";
            }
            if(y>16){
                return "Robusta";
            }
        }
        if(s=="m"){
            if(y<17){
                return "Esile";
            }
            if(y>=17&&y<=18){
                return "Normale";
            }
            if(y>18){
                return "Robusta";
            }
        }
    }
    
    let altezza :number=prompt("inserisci altezza in piedi"); 
    let peso :number=prompt("inserisci peso in libbre");
    console.log(bmi(altezza,peso));
    
    let continuare:string=prompt("vuoi continuare?si/no");
    if(continuare=="si"){
        
        let pols:number= prompt("circonferenza polso cm");
        let sesso:string =prompt("inserisci sesso (m o f)");
        console.log(polso(pols,sesso));
    
            }else console.log("Va bene bello");
    