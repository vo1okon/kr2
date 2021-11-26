import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnloginComponent } from './unlogin/unlogin.component';

const routes: Routes = [
  {path:'posts', component: PostsComponent}, 
  {path:'login', component: LoginComponent},  
  {path:'register', component: RegisterComponent},  
  {path:'unlogin', component: UnloginComponent},
  {path:'**', component: PostsComponent}    
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
