import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {provideAnimations} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { StatisticHeaderComponent } from './components/organisms/statistic-header/statistic-header.component';
import { RoadmapComponent } from './components/organisms/roadmap/roadmap.component';
import { ChallengeButtonComponent } from './components/atoms/challenge-button/challenge-button.component';
import { ChallengeDialogComponent } from './components/organisms/challenge-dialog/challenge-dialog.component';
import { TimerComponent } from './components/atoms/timer/timer.component';
import { TimerPipe } from './pipes/timer.pipe';
import { StopbuttonComponent } from './components/atoms/stopbutton/stopbutton.component';
import { ToastComponent } from './components/atoms/toast/toast.component';
import { AuthenticationpageComponent } from './components/pages/authenticationpage/authenticationpage.component';
import { LoginformComponent } from './components/organisms/loginform/loginform.component';
import { InputfieldComponent } from './components/atoms/inputfield/inputfield.component';
import { SignupformComponent } from './components/organisms/signupform/signupform.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    StatisticHeaderComponent,
    RoadmapComponent,
    ChallengeButtonComponent,
    ChallengeDialogComponent,
    TimerComponent,
    TimerPipe,
    StopbuttonComponent,
    ToastComponent,
    AuthenticationpageComponent,
    LoginformComponent,
    InputfieldComponent,
    SignupformComponent,
    LoaderComponent,
    LandingpageComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
