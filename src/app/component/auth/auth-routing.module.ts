import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'connecter', component: LoginComponent },
    {path:'creer', component:RegisterComponent}
  ])],
  exports: [RouterModule]
}) 
export class AuthRoutingModule { }
