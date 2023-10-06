import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './layout/website/website.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { 
    path: '',
    component: WebsiteComponent  
   },
   {
     path: 'loginPg',
     component: LoginComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
