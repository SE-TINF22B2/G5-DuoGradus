import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { FooterComponent } from './components/organisms/footer/footer.component';
import { UserCardComponent } from './components/atoms/user-card/user-card.component';
import { RankingTableComponent } from './components/organisms/ranking-table/ranking-table.component';
import { RankingPageComponent } from './components/pages/ranking-page/ranking-page.component';
import { ProfilepageComponent } from './components/pages/profilepage/profilepage.component';
import { StatisticEntryComponent } from './components/atoms/statistic-entry/statistic-entry.component';
import { SettingspageComponent } from './components/pages/settingspage/settingspage.component';
import { SettingsentryComponent } from './components/atoms/settingsentry/settingsentry.component';
import { FriendpageComponent } from './components/pages/friendpage/friendpage.component';
import { AddfriendpageComponent } from './components/pages/addfriendpage/addfriendpage.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { SearchbarComponent } from './components/atoms/searchbar/searchbar.component';
import { FriendCardComponent } from './components/atoms/friend-card/friend-card.component';
import { DeleteDialogComponent } from './components/organisms/delete-dialog/delete-dialog.component';
import { UserfilterPipe } from './pipes/userfilter.pipe';
import { provideRouter, withViewTransitions } from '@angular/router';

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
    FooterComponent,
    UserCardComponent,
    RankingTableComponent,
    RankingPageComponent,
    ProfilepageComponent,
    StatisticEntryComponent,
    SettingspageComponent,
    SettingsentryComponent,
    FriendpageComponent,
    AddfriendpageComponent,
    HeaderComponent,
    SearchbarComponent,
    FriendCardComponent,
    DeleteDialogComponent,
    UserfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
