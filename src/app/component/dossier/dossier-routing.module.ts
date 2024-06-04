import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CreationComponent } from './creation/creation.component';


@NgModule({
  imports: [RouterModule.forChild([
    
    {path:'creation', component: CreationComponent},

  ])],
  exports: [RouterModule]
})
export class DossierRoutingModule { }
