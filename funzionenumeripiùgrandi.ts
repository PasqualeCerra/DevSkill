function maggiore(a:number,b:number,c:number){
if(a*1>b&&a*1>c){
    return console.log(a)
}
else if(b*1>c){
    return console.log(b)
}else return console.log(c)

}

let d :number=prompt("inserisci numero a"); 
let e :number=prompt("inserisci numero b"); 
let f :number=prompt("inserisci numero c");

maggiore(d,e,f);