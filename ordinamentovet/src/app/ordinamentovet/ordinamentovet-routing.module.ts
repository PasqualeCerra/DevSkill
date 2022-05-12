import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdinamentovetPage } from './ordinamentovet.page';

const routes: Routes = [
  {
    path: '',
    component: OrdinamentovetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdinamentovetPageRoutingModule {}
