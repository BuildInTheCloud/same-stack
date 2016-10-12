import { Component } from '@angular/core';

//-- app pages for tabs
import { ProfilePage } from '../profile/profile';
import { QuestionsPage } from '../questions/questions';
import { ComparePage } from '../compare/compare';
import { MatchPage } from '../match/match';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabProfile: any = ProfilePage;
  tabQuestions: any = QuestionsPage;
  tabCompare: any = ComparePage;
  tabMatch: any = MatchPage;
  tabAbout: any = AboutPage;

  constructor() {

  }
}
