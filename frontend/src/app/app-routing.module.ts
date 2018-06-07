import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NbAuthComponent,NbLoginComponent } from '@nebular/auth';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',canActivate:[AuthGuard], },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      }
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {
}
