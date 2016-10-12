import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
//-- app pages
import { ProfilePage } from '../pages/profile/profile';
import { QuestionsPage } from '../pages/questions/questions';
import { ComparePage } from '../pages/compare/compare';
import { MatchPage } from '../pages/match/match';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ProfilePage,
    QuestionsPage,
    ComparePage,
    MatchPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ProfilePage,
    QuestionsPage,
    ComparePage,
    MatchPage,
    AboutPage
  ],
  providers: []
})

export class AppModule {}
