import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdinamentovetPageRoutingModule } from './ordinamentovet-routing.module';

import { OrdinamentovetPage } from './ordinamentovet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdinamentovetPageRoutingModule
  ],
  declarations: [OrdinamentovetPage]
})
export class OrdinamentovetPageModule {}
