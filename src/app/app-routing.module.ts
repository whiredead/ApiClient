import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';



@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: AppComponent,

      children: [
        { path: '', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule) },
    ]
    },
    { path: 'auth', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule) },
    { path: 'dossier', loadChildren: () => import('./component/dossier/dossier.module').then(m => m.DossierModule) },
  ],
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
