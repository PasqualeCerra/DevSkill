function maggiore(a:number,b:number,c:number){
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
    
    console.log(maggiore(d,e,f));