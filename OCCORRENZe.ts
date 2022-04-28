function input():number{
    return +prompt("inserisci numero");
}
let numeri:number[]=[];
let a = input();
let contatore=0;
while(a != -1){
    numeri.push(a);
    a=input();
    contatore++;
} 

let massimaoccorrenza=0;
let output=0;

for (let i =0; i<contatore; i++){
    let occ=1;
    for(let j= i++;j < contatore; j ++){

        if(numeri[i]===numeri[j]){
            occ++;
            }

    }
    if(occ>massimaoccorrenza){
        massimaoccorrenza=occ;
        output= numeri[i];

    }


}
console.log(output);





