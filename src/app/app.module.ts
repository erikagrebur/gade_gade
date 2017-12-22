import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GameDetailsPage } from '../pages/game-details/game-details';
import { GameDescriptionPage } from '../pages/game-description/game-description';
import { GiWordSearchPage } from '../pages/gi-word-search/gi-word-search';
import { GiStartGamePage } from '../pages/gi-start-game/gi-start-game';
import { GiRisingPicturePage } from '../pages/gi-rising-picture/gi-rising-picture';
import { SliderScreenPage } from '../pages/slider-screen/slider-screen';
import { ThreeQuestionPage } from '../pages/three-question/three-question';
import { GiMixedWordsPage } from '../pages/gi-mixed-words/gi-mixed-words';
import { GiObscureImgPage } from '../pages/gi-obscure-img/gi-obscure-img';
import { GiFinalScreenPage } from '../pages/gi-final-screen/gi-final-screen';
import { GiRateScreenPage } from '../pages/gi-rate-screen/gi-rate-screen';
import { SignUpScreenPage } from '../pages/sign-up-screen/sign-up-screen';
import { CityPickerPage } from '../pages/city-picker/city-picker';
import { LogInScreenPage } from '../pages/log-in-screen/log-in-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { DatabaseProvider } from '../providers/database/database';

import { GoogleMaps } from '@ionic-native/google-maps';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB6Kyact4Y6iooiaKHPaFXCEmTl8DtlACY",
    authDomain: "tryagain-b5737.firebaseapp.com",
    databaseURL: "https://tryagain-b5737.firebaseio.com",
    projectId: "tryagain-b5737",
    storageBucket: "tryagain-b5737.appspot.com",
    messagingSenderId: "158844905597"
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameDetailsPage,
    GameDescriptionPage,
    GiWordSearchPage,
    GiStartGamePage,
    GiRisingPicturePage,
    SliderScreenPage,
    ThreeQuestionPage,
    GiMixedWordsPage,
    GiObscureImgPage,
    GiFinalScreenPage,
    GiRateScreenPage,
    SignUpScreenPage,
    CityPickerPage,
    LogInScreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameDetailsPage,
    GameDescriptionPage,
    GiWordSearchPage,
    GiStartGamePage,
    GiRisingPicturePage,
    SliderScreenPage,
    ThreeQuestionPage,
    GiMixedWordsPage,
    GiObscureImgPage,
    GiFinalScreenPage,
    GiRateScreenPage,
    SignUpScreenPage,
    CityPickerPage,
    LogInScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider,
    Geolocation,
    BackgroundGeolocation,
    DatabaseProvider,
    GoogleMaps
  ]
})
export class AppModule {}
