/*function maggiore(a:number,b:number,c:number){
    if(a*1>b&&a*1>c){
        return a
    }
    else if(b*1>c){
        return b
    }else return c
    
    }
    
    let d :number=prompt("inserisci numero a"); 
    let e :number=prompt("inserisci numero b"); 
    let f :number=prompt("inserisci numero c");
    
    console.log(maggiore(d,e,f));*/
    let numeri:number[]=[];
numeri[0]=1;
numeri[1]=2;
numeri[2]=3;

if(numeri[0]>numeri[1]&& numeri[0]>numeri[2]){
    console.log(numeri[0]);
}
else if(numeri[1]>numeri[2]){
    console.log(numeri[1]);
}else console.log(numeri[2]);
