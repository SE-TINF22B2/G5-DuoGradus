import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { AuthenticationpageComponent } from './components/pages/authenticationpage/authenticationpage.component';

const routes: Routes = [
  {path:"main", component: MainpageComponent},
  {path:"login", component : AuthenticationpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
