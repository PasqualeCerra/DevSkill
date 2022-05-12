import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinamentovet',
  templateUrl: './ordinamentovet.page.html',
  styleUrls: ['./ordinamentovet.page.scss'],
})
export class OrdinamentovetPage implements OnInit {
  numero:number;
  vet :number[] = [];
  scelta: string;
  messaggio: string;

  constructor() { }

  ngOnInit() {
  }

  input() {
    this.vet.push(this.numero);
  }



  crescente (vet:number[]){
    let contenitore:number;     
    for (let i = 0; i < vet.length-1; i ++){
        for (let j = i+1; j < vet.length; j++){
            if (vet[i] > vet[j]){
                contenitore = vet[i];
                vet[i] = vet[j];
                vet[j] = contenitore;
            }
        }
    }
    console.log(vet);
    return vet;
}

decrescente (vet:number[]) { 
  let contenitore:number;   
  for (let i = 0; i < vet.length-1; i ++){
      for (let j = i+1; j < vet.length; j++){
          if (vet[i] < vet[j]) {
              contenitore = vet[i];
              vet[i] = vet[j];
              vet[j] = contenitore;
          }
      }
  }
  console.log(vet);
  return vet;
}
ordinamento(){
  this.messaggio=""
  if (this.scelta === "c"){
    this.messaggio+=this.crescente(this.vet);
  }else if (this.scelta === "d"){
    this.messaggio+=this.decrescente(this.vet);}
}
}
