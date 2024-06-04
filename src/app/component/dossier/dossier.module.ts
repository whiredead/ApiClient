import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossierRoutingModule } from './dossier-routing.module';
import { CreationComponent } from './creation/creation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreationComponent],
  imports: [
    CommonModule,
    DossierRoutingModule,
    SharedModule
  ]
})
export class DossierModule { }
