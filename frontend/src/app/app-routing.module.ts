/**
 * This file contains the routing configuration for the application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { AuthenticationpageComponent } from './components/pages/authenticationpage/authenticationpage.component';
import { LoginformComponent } from './components/organisms/loginform/loginform.component';
import { SignupformComponent } from './components/organisms/signupform/signupform.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { RankingPageComponent } from './components/pages/ranking-page/ranking-page.component';
import { ProfilepageComponent } from './components/pages/profilepage/profilepage.component';
import { SettingspageComponent } from './components/pages/settingspage/settingspage.component';
import { AddfriendpageComponent } from './components/pages/addfriendpage/addfriendpage.component';
import { FriendpageComponent } from './components/pages/friendpage/friendpage.component';

/**
 * The routes of the application. Each route is defined by a path and a component.
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'ranking', component: RankingPageComponent},
  { path: 'profile', component: ProfilepageComponent},
  { path: 'settings', component: SettingspageComponent},
  { path: 'friends', component: FriendpageComponent},
  { path: 'addfriend', component: AddfriendpageComponent},
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
