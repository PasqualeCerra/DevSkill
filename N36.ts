let x:number=[];
for(let i=0;i<10;i++){
    x[i]=+prompt("inserisci numero in posizione "+i);
}
let z:boolean=true;
let y:number=+prompt("inserisci numero x");
for(let i=0;i<10;i++){
    if(x[i]%y==0){
        z=false;
    }
}
if(z==true){
    console.log("OK");
}else console.log("NO");