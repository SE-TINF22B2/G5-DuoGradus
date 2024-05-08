import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { AuthenticationpageComponent } from './components/pages/authenticationpage/authenticationpage.component';
import { LoginformComponent } from './components/organisms/loginform/loginform.component';
import { SignupformComponent } from './components/organisms/signupform/signupform.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'main', component: MainpageComponent },
  {
    path: 'auth',
    component: AuthenticationpageComponent,
    children: [
      { path: 'signup', component: SignupformComponent },
      { path: 'login', component: LoginformComponent },
    ],
  },
  { path: '**', redirectTo: '/home' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
