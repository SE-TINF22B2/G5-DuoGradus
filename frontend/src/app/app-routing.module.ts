import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { AuthenticationpageComponent } from './components/pages/authenticationpage/authenticationpage.component';
import { LoginformComponent } from './components/organisms/loginform/loginform.component';
import { SignupformComponent } from './components/organisms/signupform/signupform.component';

const routes: Routes = [
  {path:"main", component: MainpageComponent},
  {path:"auth", component : AuthenticationpageComponent, children : [
    {path: "signup", component: SignupformComponent},
    {path: "login", component: LoginformComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
