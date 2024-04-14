import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { StatisticHeaderComponent } from './components/organisms/statistic-header/statistic-header.component';
import { RoadmapComponent } from './components/organisms/roadmap/roadmap.component';
import { ChallengeButtonComponent } from './components/atoms/challenge-button/challenge-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    StatisticHeaderComponent,
    RoadmapComponent,
    ChallengeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
