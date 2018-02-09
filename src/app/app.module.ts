import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {AuthProvider} from '../providers/auth/auth';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TutorialPageModule} from '../pages/tutorial/tutorial.module';
import {WelcomePageModule} from '../pages/welcome/welcome.module';
import {IsbnProvider} from '../providers/isbn/isbn';
import {BookPageModule} from '../pages/book/book.module';
import { ChapterProvider } from '../providers/chapter/chapter';
import {ChapterListPageModule} from "../pages/chapter-list/chapter-list.module";
import {ScansPageModule} from "../pages/scans/scans.module";
import {Facebook} from "@ionic-native/facebook";


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    TutorialPageModule,
    WelcomePageModule,
    BookPageModule,
    BookPageModule,
    ChapterListPageModule,
    ScansPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    IsbnProvider,
    ChapterProvider,
  ]
})
export class AppModule {
}
