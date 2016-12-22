import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { SearchPage } from '../pages/search/search';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {Shared} from '../providers/shared';
import { RestService } from '../providers/rest-service';
import { CommentModalPage } from '../pages/comment-modal/comment-modal';
import { CalculateModalPage } from '../pages/calculate-modal/calculate-modal';
import { ReviewModalPage } from '../pages/review-modal/review-modal';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { ActionPage } from '../pages/action/action';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostPage,
    SearchPage,
    AccountPage,
    TabsPage,
    LoginPage,
    CommentModalPage,
    CalculateModalPage,
    ReviewModalPage,
    SuggestionPage,
    ActionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
tabsPlacement: 'top',
  platforms: {
    android: {
      tabsPlacement: 'bottom'
    },
    ios: {
      tabsPlacement: 'bottom'
    },
    windows:
    {
      tabsPlacement: 'top'
    }
  }
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    SearchPage,
    HomePage,
    AccountPage,
    TabsPage,
    LoginPage,
    CommentModalPage,
    CalculateModalPage,
    ReviewModalPage,
    SuggestionPage,
    ActionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Shared, RestService]
})
export class AppModule {}
