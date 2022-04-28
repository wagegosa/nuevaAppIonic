import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitysPage } from './citys.page';

const routes: Routes = [
  {
    path: '',
    component: CitysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitysPageRoutingModule {}
