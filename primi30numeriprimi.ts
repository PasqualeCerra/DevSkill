let numero:number=0;
let allarme:boolean=true;
let divisore:number=0;
let contatore=0;
while(contatore<30){
    while(allarme==true){

    if(numero%divisore==0&&numero!=divisore&&divisore!=1){
        allarme=false;
    }else if(divisore==1&&allarme==true&&numero!=1){
        console.log(numero);
        allarme=false;
        contatore++;
    }else divisore--;
    }

    allarme=true;
    numero++;
    divisore=numero;

}
