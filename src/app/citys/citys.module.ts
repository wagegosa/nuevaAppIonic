import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitysPageRoutingModule } from './citys-routing.module';

import { CitysPage } from './citys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitysPageRoutingModule
  ],
  declarations: [CitysPage]
})
export class CitysPageModule {}
